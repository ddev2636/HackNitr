import express from "express";
const router = express.Router();
import { createSession, register } from "../controllers/investorController.js";

router.post("/create-session", createSession);
router.post("/register", register);

export default router;
