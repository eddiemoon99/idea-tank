import express from 'express';
import {
  getMemories,
  createMemory,
  updateMemory,
  deleteMemory,
  likeMemory,
} from '../controllers/memories.js';

const router = express.Router();

router.get('/', getMemories);
router.post('/', createMemory);
router.patch('/:id', updateMemory);
router.delete('/:id', deleteMemory);
router.patch('/:id/likeMemory', likeMemory);

export default router;
