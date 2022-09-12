import mongoose from 'mongoose';

const ideaSchema = mongoose.Schema({
  title: String,
  description: String,
  creator: String,
  tags: [String],
  selectedFile: String,
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
