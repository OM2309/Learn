import User from "../src/user/user.models.js";

export const checkAdmin = async (req, res, next) => {
  try {
    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ message: "Unauthorized. No user ID found." });
    }

    const user = await User.findOne({ _id: req.user.id });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    next();
  } catch (error) {
    console.error("❌ Error in checkAdmin middleware:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
