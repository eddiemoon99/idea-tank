import express from 'express';

import {
  getIdeas,
  createIdea,
  updateIdea,
  deleteIdea,
  upvoteIdea,
  downvoteIdea,
} from '../controllers/ideas.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// routes
router.get('/', getIdeas);
router.post('/', auth, createIdea);
router.patch('/:id', auth, updateIdea);
router.delete('/:id', auth, deleteIdea);
router.patch('/:id/upvoteIdea', auth, upvoteIdea);
router.patch('/:id/downvoteIdea', auth, downvoteIdea);

export default router;
