const express = require("express");
const userRouter = express.Router();
const User = require('../../Models/User');
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// Signup Route
userRouter.post('/signup', async (req, res) => {
  try {
    const { email, password, confirmPassword, username } = req.body;

    if (!email || !password || !username || !confirmPassword) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }
    if (password.length < 6) {
      return res.status(400).json({ msg: "Password should be at least 6 characters" });
    }
    if (confirmPassword !== password) {
      return res.status(400).json({ msg: "Both the passwords don't match" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User with the same email already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 8);
    const newUser = new User({ email, password: hashedPassword, username });

    const savedUser = await newUser.save();
    console.log(savedUser.username); // Logging the username to the console for debugging purposes

    // Create token
    const token = jwt.sign(
      { id: savedUser._id },
      process.env.JWT_SECRET, // Make sure to set the JWT_SECRET in your environment variables
      { expiresIn: 3600 }
    );

    res.json({ 
      token,
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
  
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send({ msg: "Incorrect password." });
      }

      const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET, // Use secret key from environment variables
        { expiresIn: '1h' } // Token expires in 1 hour
      );

      res.json({ token, user: { id: user._id, username: user.username } });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

    //to check if token is valid 
    userRouter.post("/tokenIsValid", async (req, res) => {
      try {
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);
  
        const verified = jwt.verify(token, process.env.JWT_SECRET);    //put jwt passcode 
        if (!verified) return res.json(false);
  
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
  
        return res.json(true);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

// To get the user's credentials
userRouter.get("/", auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
      username: user.username,
      id: user._id,
    });
  });

module.exports = userRouter;
