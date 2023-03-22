import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { generateAccessToken } from "../middleware/generateAccessToken.js";
import { generateRefreshToken } from "../middleware/generateRefreshToken.js";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User has been created");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    req.session.accessToken = accessToken;
    req.session.refreshToken = refreshToken;
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      lists: user.lists,
      isAdmin: user.isAdmin,
      token: accessToken,
    });
  } catch (err) {
    next(err);
  }
};

export const refreshSession = (req, res, next) => {
  try {
    res.status(200);
  } catch (err) {
    next(err);
  }
};

export const logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "Logout successful" });
  });
};
