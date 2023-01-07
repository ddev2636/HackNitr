import express from "express";
const router = express.Router();
import { createSession, register,getStartups } from "../controllers/startupController.js";

//POST
router.post("/create-session", createSession);
router.post("/register", register);


//READ
router.get("/", getStartups);

export default router;
