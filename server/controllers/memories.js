import mongoose from 'mongoose';
import MemoryMessage from '../models/memoryMessage.js';

export const getMemories = async (req, res) => {
  try {
    const memoryMessages = await MemoryMessage.find();

    console.log(memoryMessages);

    res.status(200).json(memoryMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMemory = async (req, res) => {
  const memory = req.body;

  const newMemory = new MemoryMessage(memory);

  try {
    await newMemory.save();

    res.status(201).json(newMemory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateMemory = async (req, res) => {
  const { id: _id } = req.params;
  const memory = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No memory with the id exists');

  const updatedMemory = await MemoryMessage.findByIdAndUpdate(_id, memory, {
    new: true,
  });

  res.json(updatedMemory);
};

export const deleteMemory = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No memory with the id exists');

  await MemoryMessage.findByIdAndRemove(_id);

  res.json({ message: 'Memory deleted successfully' });
};

export const likeMemory = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No memory with the id exists');

  const memory = await MemoryMessage.findById(_id);

  const updatedMemory = await MemoryMessage.findByIdAndUpdate(
    _id,
    { likeCount: memory.likeCount + 1 },
    { new: true }
  );

  res.json(updatedMemory);
};
