import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import ideaRoutes from './routes/ideas.js';
import userRoutes from './routes/user.js';
// create server
const app = express();

// env var
dotenv.config();

// setup body parser for requests
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// routes
app.use('/ideas', ideaRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT;

// connect mongoose
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
