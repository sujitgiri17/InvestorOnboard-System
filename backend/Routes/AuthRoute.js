const express = require("express");
const passport = require("passport");
const User = require("../model/UserModel");
const router = express.Router();

// ✅ Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const isExist = await User.findOne({ email });
    if (isExist) return res.status(400).json({ success: false, message: "Email already exists" });

    await new User({ username, email, password }).save();
    res.json({ success: true, message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Login Route (using Passport)
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ success: true, message: "Login successful", user: req.user });
});

// ✅ Logout Route
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.json({ success: true, message: "Logged out successfully" });
  });
});

module.exports = router;
