import express from 'express';
import {
  getIdeas,
  createIdea,
  updateIdea,
  deleteIdea,
  upvoteIdea,
  downvoteIdea,
} from '../controllers/ideas.js';

const router = express.Router();

// routes
router.get('/', getIdeas);
router.post('/', createIdea);
router.patch('/:id', updateIdea);
router.delete('/:id', deleteIdea);
router.patch('/:id/upvoteIdea', upvoteIdea);
router.patch('/:id/downvoteIdea', downvoteIdea);

export default router;
