const express = require("express");
const { createPost } = require("./post.controller");
const authToken = require("../../middlewares/authMiddleware");
const upload = require("../../middlewares/multer");
const router = express.Router();

router.post("/create-post", authToken, upload.single(image), createPost);

module.exports = router;
