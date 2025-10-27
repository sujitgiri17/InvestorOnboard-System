const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ email, username, password });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days
    });

    const { password: pwd, ...userData } = user._doc;

    res.status(201).json({ message: "User signed up successfully", success: true, user: userData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
