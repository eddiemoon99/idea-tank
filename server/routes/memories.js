import express from 'express';
import { getMemories, createMemory } from '../controllers/memories.js';

const router = express.Router();

router.get('/', getMemories);
router.get('/', createMemory);

export default router;
