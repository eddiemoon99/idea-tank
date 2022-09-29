import mongoose from 'mongoose';

const ideaSchema = mongoose.Schema({
  title: String,
  description: String,
  inventor: String,
  tags: [String],
  selectedFile: String,
  upvotes: {
    type: [String],
    default: [],
  },
  downvotes: {
    type: [String],
    default: [],
  },
  upvoteCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Idea = mongoose.model('Idea', ideaSchema);

export default Idea;
