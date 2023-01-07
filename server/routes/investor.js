import express from 'express';
const router=express.Router();
import { createSession } from '../controllers/investorController.js';


router.post('/create-session',
createSession);

export default router;