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
