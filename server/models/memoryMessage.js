import mongoose from 'mongoose';

const memorySchema = mongoose.Schema({
  title: String,
  description: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const MemoryMessage = mongoose.model('MemoryMessage', memorySchema);

export default MemoryMessage;
