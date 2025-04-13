// cloudinaryUploader.js
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

module.exports = {
  uploadImageToCloudinary: async (localFilePath, folderName) => {
    try {
      const result = await cloudinary.uploader.upload(localFilePath, {
        folder: folderName || "uploads",
      });

      fs.unlinkSync(localFilePath);

      return result.secure_url;
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      return null;
    }
  },
};
