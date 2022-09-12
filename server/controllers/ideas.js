import mongoose from 'mongoose';
import Idea from '../models/idea.js';

export const getIdeas = async (req, res) => {
  try {
    const ideaMessages = await Idea.find();

    res.status(200).json(ideaMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createIdea = async (req, res) => {
  const idea = req.body;

  const newIdea = new Idea(idea);

  try {
    await newIdea.save();

    res.status(201).json(newIdea);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateIdea = async (req, res) => {
  const { id: _id } = req.params;
  const idea = req.body;

  // check idea is valid first
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No idea with the id exists');

  const updatedIdea = await Idea.findByIdAndUpdate(_id, idea, {
    new: true,
  });

  res.json(updatedIdea);
};

export const deleteIdea = async (req, res) => {
  const { id: _id } = req.params;

  // check idea is valid first
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No idea with the id exists');

  await Idea.findByIdAndRemove(_id);

  res.json({ message: 'Idea deleted successfully' });
};

export const upvoteIdea = async (req, res) => {
  const { id: _id } = req.params;

  // check idea is valid first
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No idea with the id exists');

  const idea = await Idea.findById(_id);

  const updatedIdea = await Idea.findByIdAndUpdate(
    _id,
    { upvoteCount: idea.upvoteCount + 1 },
    { new: true }
  );

  res.json(updatedIdea);
};

export const downvoteIdea = async (req, res) => {
  const { id: _id } = req.params;

  // check idea is valid first
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No idea with the id exists');

  const idea = await Idea.findById(_id);

  const updatedIdea = await Idea.findByIdAndUpdate(
    _id,
    { upvoteCount: idea.upvoteCount - 1 },
    { new: true }
  );

  res.json(updatedIdea);
};
