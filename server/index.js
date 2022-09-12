import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/memories.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/memories', router);
// MongoDB Atlas

const CONNECTION_URL =
  'mongodb+srv://eddiemoon:DB-b6HVfG6UnyyL@cluster0.yofer49.mongodb.net/?retryWrites=true&w=majority';
const PORT = 5000;

// connect mongoose

console.log(CONNECTION_URL);
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// deprecated function
// mongoose.set('useFindAndModify', false);
