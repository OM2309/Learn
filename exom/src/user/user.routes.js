import express from "express";
import { signUp, signIn, test } from "./user.controllers.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

export default router;
