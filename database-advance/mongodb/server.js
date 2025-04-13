require("dotenv").config();
const express = require("express");
const connectDB = require("./db/db");
const userRoutes = require("./src/user/user.route");
const postRoutes = require("./src/post/post.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/v1/api/user", userRoutes);
app.use("/v1/api/post", postRoutes);

app.listen(3000, async () => {
  await connectDB();
  console.log("Server start");
});
