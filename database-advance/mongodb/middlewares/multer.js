// multer.js
const multer = require("multer");
const path = require("path");

// Storage config
const storage = multer.diskStorage({
  // second this call back run
  // Kahan store kare image — yahan local folder "uploads"
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  // third this call back run
  // File ka unique naam banao
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// first this call back run
// Image validation
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const isValidExt = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const isValidMime = allowedTypes.test(file.mimetype);

  if (isValidExt && isValidMime) cb(null, true); // ✅ allow
  else cb(new Error("Only JPG, JPEG, PNG files allowed"), false); // ❌ reject
};

// Multer middleware
module.exports = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Max 5MB
});
