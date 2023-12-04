const express = require("express");
const userRouter = express.Router();
const User = require('../../Models/User');

// Signup Route
userRouter.post('/signup', async (req, res) => {
  try {
    const { email, password, confirmPassword, username } = req.body;

    if (!email || !password || !confirmPassword || !username) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User with the same email already exists" });
    }

    const newUser = new User({ email, password, username });

    const savedUser = await newUser.save();
    console.log(savedUser.username); // Logging the username to the console for debugging purposes

    res.json({
      user: {
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login Route
userRouter.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ msg: "Please enter all the fields" });
      }
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({ msg: "User with this email does not exist" });
      }
  
      if (password !== user.password) {
        return res.status(400).send({ msg: "Incorrect password." });
      }
  
      res.json({ user: { id: user._id, username: user.username } });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// To get the user's credentials
userRouter.get("/", async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
      username: user.username,
      id: user._id,
    });
  });

module.exports = userRouter;
