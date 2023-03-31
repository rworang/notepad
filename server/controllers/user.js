import { createError } from "../middleware/error.js";
import User from "../models/User.js";

export const findUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { name, email, avatar, notesCount, notes, isAdmin } = user;
    const profile = {
      name,
      email,
      avatar,
      notesCount,
      notes,
      isAdmin,
    };
    res.status(200).json(profile);
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id || req.user.isAdmin) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can only update your own account"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can only delete your own account"));
  }
};
