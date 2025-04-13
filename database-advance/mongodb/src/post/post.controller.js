const { uploadImageToCloudinary } = require("../../helper/uploadImage");
const Post = require("./post.model");

module.exports = {
  createPost: async (req, res) => {
    try {
      const { userId } = req.user;
      const { content } = req.body;
      const { image } = req.file;

      let imageURL = "";
      if (req.file) {
        imageURL = await uploadImageToCloudinary(req.file.path, "posts");
      }

      if (!content) {
        return res.status(400).json({
          success: false,
          message: "Content is required",
        });
      }

      const post = await Post.create({
        content,
        author: userId,
        image: imageURL,
      });

      return res.status(201).json({
        success: true,
        message: "Post created successfully",
        post,
      });
    } catch (error) {
      console.error("Error in create post: ", error.message);
      return res.status(500).json({
        success: false,
        message: "Failed to create post",
        error: error.message,
      });
    }
  },
};
