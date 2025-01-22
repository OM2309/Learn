import userModel from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { name, age } = req.body;

    // Validate input
    if (!name || !age) {
      return res.status(400).json({ message: "Name and age are required" });
    }

    // Create the user
    const user = await userModel.create({ name, age });

    // Respond with the created user
    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await userModel.find();
    if (!user) {
      return res.status(404).json({ message: "No data found " });
    }

    return res.status(200).json({ message: "User found", user });
  } catch (error) {
    console.error("Error getting user", error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if ID is provided
    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Find and delete the user by ID
    const user = await userModel.findByIdAndDelete(id);

    // If user is not found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Respond with success
    return res.status(200).json({
      message: "User deleted successfully",
      user,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;

    // Validate if ID is provided
    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Validate if there is data to update
    if (!name && !age) {
      return res.status(400).json({
        message: "At least one field (name or age) is required to update",
      });
    }

    const user = await userModel.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (name) user.name = name;
    if (age) user.age = age;

    const updatedUser = await user.save();

    return res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
