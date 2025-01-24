const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const token = require('../models/tokenSchema')
const jwt = require('jsonwebtoken')
require('dotenv').config();

// Register new user
const userRegister = async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({
    name,
    email,
    password,
  });

  try {
    const isExisting = await User.findOne({ email });
    if (isExisting) {
      return res
        .status(400)
        .json({ message: "User already exists in the application" });
    }

    const salt = await bcrypt.genSalt(10); // Generate a salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash password
    newUser.password = hashedPassword;

    await newUser.save();
    return res.status(200).json({ message: "User saved successfully" });
  } catch (error) {
    return res.status(500).json({ message: `Server error: ${error.message}` }); // Fixed here
  }
};

// Login user
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email }); // Search by email
    if (!foundUser) {
      return res.status(400).json({ message: "User not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      foundUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }else{
      const accessToken=jwt.sign(foundUser.toJSON(),process.env.ACCESS_TOKEN_KEY,{ expiresIn : '15m'});
      const refreshToken=jwt.sign(foundUser.toJSON(),process.env.REFRESH_TOKEN_KEY);
      const newToken = new token({token:refreshToken});
      await newToken.save();
      return res.status(200).json({ message: "Login successful" , accessToken: accessToken , refreshToken : refreshToken , name:foundUser.name , email:foundUser.email});
    }
  } catch (error) {
    return res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

module.exports = { userRegister, userLogin };
