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
  console.log('req.body: ', req.body);
  const newIdea = new Idea({
    ...idea,
    inventor: req.userId,
    createdAt: new Date().toISOString(),
  });

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

  // if user is not authenticated
  if (!req.userId) {
    return res.json({ message: 'User is not authenticated' });
  }
  // check idea is valid first
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No idea with the id exists');

  const idea = await Idea.findById(_id);

  // check if user already upvoted
  const indexUp = idea.upvotes.findIndex((id) => id === String(req.userId));

  // check if user already downvoted
  const indexDown = idea.downvotes.findIndex((id) => id === String(req.userId));

  // logic handling for upvote
  if (indexUp !== -1) {
    idea.upvotes = idea.upvotes.filter((id) => id !== String(req.userId));
    idea.upvoteCount -= 1;
  } else if (indexDown !== -1) {
    idea.downvotes = idea.downvotes.filter((id) => id !== String(req.userId));
    idea.upvotes.push(req.userId);
    idea.upvoteCount += 2;
  } else {
    idea.upvotes.push(req.userId);
    idea.upvoteCount += 1;
  }

  const updatedIdea = await Idea.findByIdAndUpdate(_id, idea, { new: true });

  res.json(updatedIdea);
};

export const downvoteIdea = async (req, res) => {
  const { id: _id } = req.params;

  // check user is authenticated
  if (!req.userId) {
    return res.json({ message: 'User is not authenticated.' });
  }

  // check idea is valid first
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No idea with the id exists');

  const idea = await Idea.findById(_id);

  // check if user already upvoted
  const indexUp = idea.upvotes.findIndex((id) => id === String(req.userId));

  // check if user already downvoted
  const indexDown = idea.downvotes.findIndex((id) => id === String(req.userId));

  // logic handling for downvote
  if (indexDown !== -1) {
    idea.downvotes = idea.downvotes.filter((id) => id !== String(req.userId));
    idea.upvoteCount += 1;
  } else if (indexUp !== -1) {
    idea.upvotes = idea.upvotes.filter((id) => id !== String(req.userId));
    idea.downvotes.push(req.userId);
    idea.upvoteCount -= 2;
  } else {
    idea.downvotes.push(req.userId);
    idea.upvoteCount -= 1;
  }

  const updatedIdea = await Idea.findByIdAndUpdate(_id, idea, { new: true });

  res.json(updatedIdea);
};
