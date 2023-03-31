import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import {
  generateTokens,
  generateRefreshToken,
} from "../utils/generateTokens.js";

export const register = async (req, res, next) => {
  try {
    const user = await User.findOne({ name });
    if (!user) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({ ...req.body, password: hash });

      await newUser.save();
      res.status(200).send("User has been created");
    } else {
      next({ status: 500, message: "Username already exists" });
    }
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
    const { access_token, refresh_token } = generateTokens(user);
    req.session.access_token = access_token;
    req.session.refresh_token = refresh_token;

    res.cookie("access_token", access_token, {
      maxAge: process.env.JWT_EXPIRES_IN,
      httpOnly: true,
      sameSite: true,
      secure: process.env.NODE_ENV === "production",
    });

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      notesCount: user.notesCount,
      notes: user.notes,
      isAdmin: user.isAdmin,
      token: access_token,
    });
  } catch (err) {
    next(err);
  }
};

export const refreshSession = (req, res, next) => {
  try {
    const decodedRefreshToken = jwt.verify(
      req.session.refresh_token,
      process.env.JWT_REFRESH
    );
    const user = User.findById(decodedRefreshToken.id).lean();

    if (!user) {
      throw { status: 401, message: "User not authenticated" };
    }
    const refresh_token = generateRefreshToken(user);
    req.session.refresh_token = refresh_token;
    res.status(200).json({ message: "Session refreshed" });
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
    res.clearCookie("access_token");
    res.status(200).json({ message: "Logout successful" });
  });
};
