import express from 'express';

import { signIn, signUp } from '../controllers/user.js';

// create instance of router
const router = express.Router();

// add routes
router.post('/signin', signIn);
router.post('/signup', signUp);

export default router;
