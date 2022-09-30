import express from 'express';

import { signIn, signUp } from '../controllers/user.js';

// create instance of router
const router = express.Router();

// add routes
router.post('/signIn', signIn);
router.post('/signUp', signUp);

export default router;
