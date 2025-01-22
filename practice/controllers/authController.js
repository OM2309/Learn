import AuthModel from "../models/authModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// In-memory token blacklist (use a more persistent store like Redis in production)
const tokenBlacklist = new Set();

export const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(401)
        .json({ status: false, message: "All fields are required" });
    }

    const isExist = await AuthModel.findOne({ email });

    if (isExist) {
      return res.json({ status: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await AuthModel.create({
      email,
      password: hashedPassword,
    });

    return res.status(200).json({ status: true, message: "Auth created" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(401)
        .json({ status: false, message: "All fields are required" });
    }

    const user = await AuthModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ status: false, message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, "1233333", {
      expiresIn: "1d", // Token expires in 1 day
    });

    return res.status(200).json({
      status: true,
      message: "Login successful",
      token,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Logout route (server-side)
export const logout = (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract the token from Authorization header

  if (!token) {
    return res.status(400).json({ message: "No token provided" });
  }

  try {
    // Optionally verify the token (for added security)
    jwt.verify(token, "1233333"); // Replace with your actual JWT secret

    // Add the token to the blacklist
    tokenBlacklist.add(token);

    return res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Middleware to check if the token is blacklisted
export const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract the token from Authorization header

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied, no token provided" });
  }

  // Check if the token is blacklisted
  if (tokenBlacklist.has(token)) {
    return res
      .status(403)
      .json({ message: "Token has been invalidated, please log in again" });
  }

  try {
    const decoded = jwt.verify(token, "1233333"); // Replace with your actual JWT secret
    req.user = decoded; // Attach user info to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};
