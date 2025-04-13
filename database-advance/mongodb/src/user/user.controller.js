const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./user.model");
const cloudinary = require("../../config/cloudinary");
const { uploadImageToCloudinary } = require("../../helper/uploadImage");

module.exports = {
  signUp: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const { profilePic } = req.file;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.json({
          success: false,
          message: "User already exists",
        });
      }

      let profilePicUrl = "";
      if (req.file) {
        profilePicUrl = await uploadImageToCloudinary(req.file.path, "users");
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        profilePic: profilePicUrl,
      });

      return res.json({
        success: true,
        message: "User registered successfully",
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        },
      });
    } catch (error) {
      console.log("Error in signup: ", error.message);
      return res.json({
        success: false,
        message: error.message,
      });
    }
  },
  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.json({
          success: false,
          message: "All fields are required",
        });
      }

      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        return res.json({
          success: false,
          message: "User not found",
        });
      }

      const passwordMatch = bcrypt.compare(password, existingUser.password);

      if (!passwordMatch) {
        return res.json({
          success: false,
          message: "Invalid Credentials",
        });
      }

      const token = jwt.sign(
        { userId: existingUser._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return res.json({
        success: true,
        message: "Login successful",
        token,
        user: {
          id: existingUser._id,
          username: existingUser.username,
          email: existingUser.email,
        },
      });
    } catch (error) {
      console.log("Error in signIn: ", error.message);
      return res.json({
        success: false,
        message: error.message,
      });
    }
  },
};
