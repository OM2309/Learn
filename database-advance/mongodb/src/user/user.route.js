const express = require("express");
const { signUp, signIn } = require("./user.controller");
const upload = require("../../middlewares/multer");
const router = express.Router();

router.post("/sign-up", upload.single("profilePic"), signUp);
router.post("/sign-in", signIn);

module.exports = router;
