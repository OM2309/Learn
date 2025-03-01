import express from "express";
import { checkToken } from "../../middleware/checkToken.js";
import { checkAdmin } from "../../middleware/checkAdmin.js";
import { createCategory } from "./category.controllers.js";

const router = express.Router();

router.post("/create-category", checkToken, checkAdmin, createCategory);

export default router;
