import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./src/user/user.routes.js";
import productRoutes from "./src/product/product.routes.js";
import orderRoutes from "./src/order/order.routes.js";
import categoryRoutes from "./src/category/category.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", categoryRoutes);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});
