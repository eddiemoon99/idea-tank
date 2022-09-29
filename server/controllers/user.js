import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import User from '../models/user.js';

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    // find user with input email
    const existingUser = await User.findOne({ email });

    // if user does not exist
    if (!existingUser) {
      return res.status(404).json({ message: 'User does not exist.' });
    }

    // check password
    const checkPassword = await bcrypt.compare(password, existingUser.password);

    // if password does not match =
    if (!checkPassword) {
      return res.status(400).json({ message: 'Password is invalid' });
    }

    // create web token for user
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Sorry, something went wrong.' });
  }
};

export const signUp = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    // check if email exists
    const existingUser = await User.findOne({ email });

    // if user with email exists
    if (existingUser) {
      return res
        .status(400)
        .json({ message: 'User with this email already exists.' });
    }

    // if password do not match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match.' });
    }

    // create hashed password
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    // create web token
    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
