import mongoose from "mongoose";
import Product from "../product/product.models.js";
import Order from "./order.model.js";

export const buyProduct = async (req, res) => {
  try {
    const { products } = req.body; // Expecting an array of products

    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: "Products array is required" });
    }

    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized. User not found." });
    }

    let totalPrice = 0;
    let productUpdates = []; // Store products to update stock later

    // Loop through each product in the order
    for (let item of products) {
      const { productId, quantity } = item;

      if (!productId || !quantity) {
        return res
          .status(400)
          .json({ message: "Each product must have productId and quantity" });
      }

      const product = await Product.findById(productId);
      if (!product) {
        return res
          .status(404)
          .json({ message: `Product ${productId} not found` });
      }

      if (product.stock < quantity) {
        return res
          .status(400)
          .json({ message: `Insufficient stock for ${product.name}` });
      }

      totalPrice += product.price * quantity;

      // Store product updates for later
      productUpdates.push({ product, quantity });
    }

    // Create the order
    const order = new Order({
      userId: req.user.id,
      products,
      totalPrice,
      status: "pending",
    });

    await order.save();

    // Reduce stock only after order is successfully placed
    for (let { product, quantity } of productUpdates) {
      product.stock -= quantity;
      await product.save();
    }

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    console.error("Error in buyProduct:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// export const getUserOrder = async (req, res) => {
//   const { userId } = req.params;

//   const orders = await Order.aggregate([
//     {
//       $match: { userId: mongoose.Types.ObjectId(userId) },
//     },
//     {
//       $lookup: {
//         from: "products", // table name
//         localField: "produts.productId", // order table ke andr product ka column hain uske and product id hain
//         foreignField: "_id", // jis se match karana hain  product model ki _id
//         as: "orderedProducts", // kis variable mein reult lena hain
//       },
//     },
//     {
//       $project: {
//         _id: 1,
//         totalPrice: 1,
//         status: 1,
//         products: { name: 1, price: 1, _id: 1 },
//         createdAt: 1,
//       },
//     },
//   ]);
// };

export const getUserOrder = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const orders = await Order.aggregate([
      {
        $match: { userId: new mongoose.Types.ObjectId(userId) }, // Convert userId to ObjectId
      },

      {
        $lookup: {
          from: "products", // MongoDB collection name for products
          localField: "products.productId", // Order model ka field
          foreignField: "_id", // Product model ka _id
          as: "orderedProducts", // Matched product ki details store karna
        },
      },
    ]);

    res.status(200).json({ message: "Orders fetched successfully", orders });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
