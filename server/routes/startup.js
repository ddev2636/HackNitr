import express from 'express';
const router=express.Router();
import { createSession } from '../controllers/startupController.js';


router.post('/create-session',
createSession);

export default router;