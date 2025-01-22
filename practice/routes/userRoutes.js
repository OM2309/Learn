import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

// POST route for creating a user
router.post("/create-user", createUser);
router.get("/", getUser);
router.delete("/delete-user/:id", deleteUser);
router.put("/update-user/:id", updateUser);

export default router;
