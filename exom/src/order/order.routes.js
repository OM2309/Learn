import express from "express";
import { checkToken } from "../../middleware/checkToken.js";
import { buyProduct, getUserOrder } from "./order.controllers.js";

const router = express.Router();

router.post("/create-order", checkToken, buyProduct);
router.get("/get-order-by-userid", checkToken, getUserOrder);

export default router;
