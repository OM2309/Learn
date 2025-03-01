import express from "express";
import { createProduct, getAllProducts } from "./product.controllers.js";
import { checkToken } from "../../middleware/checkToken.js";
import { checkAdmin } from "../../middleware/checkAdmin.js";

const router = express.Router();

router.post("/create-product", checkToken, checkAdmin, createProduct);
router.get("/get-all-products", checkToken, getAllProducts);

export default router;
