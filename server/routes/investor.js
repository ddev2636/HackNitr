import express from "express";
const router = express.Router();
import { createSession, getInvestors, register } from "../controllers/investorController.js";

// POST
router.post("/create-session", createSession);
router.post("/register", register);


//READ
router.get("/", getInvestors);



export default router;
