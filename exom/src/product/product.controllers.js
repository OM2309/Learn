import Product from "./product.models.js";

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, categoryId } = req.body;

    if (!name || !description || !price || stock === undefined) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const product = await Product.create({
      name,
      description,
      price,
      stock,
      categoryId,
    });

    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// export const getAllProducts = async (req, res, next) => {
//   try {
//     const allProucts = await Product.find();
//     res
//       .status(201)
//       .json({ message: "Product fetched successfully", allProucts });
//   } catch (error) {
//     console.log("Error getting product", error);
//   }
// };

export const getAllProducts = async (req, res) => {
  try {
    let { sortBy, order, productId } = req.query;
    let filter = {};
    let sortOptions = {};

    if (productId) {
      filter._id = productId;
    }

    if (sortBy && order) {
      sortOptions[sortBy] = order === "asc" ? 1 : -1;
    } else {
      sortOptions["createdAt"] = -1;
    }

    const products = await Product.find(filter).sort(sortOptions);

    res
      .status(200)
      .json({ message: "Products fetched successfully", products });
  } catch (error) {
    console.error("Error getting products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
