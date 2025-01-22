import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());

app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.listen(5000, async () => {
  await connectDB();
  console.log("Server is running on port 5000");
});
