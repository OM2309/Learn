import Category from "./category.models.js";

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name are required." });
    }

    const category = await Category.create({
      name,
    });

    res
      .status(201)
      .json({ message: "Category created successfully", category });
  } catch (error) {
    console.error("Error creating Category:", error);
    res.status(500).json({ message: error.message });
  }
};
