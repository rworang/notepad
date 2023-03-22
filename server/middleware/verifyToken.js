import jwt from "jsonwebtoken";
import { createError } from "./error.js";
import { generateAccessToken } from "./generateAccessToken.js";
import { generateRefreshToken } from "./generateRefreshToken.js";
import User from "../models/User.js";

export const verifyToken = async (req, res, next) => {
  console.log(req.session.accessToken);
  const accessToken = req.session.accessToken;

  if (!accessToken) {
    console.log(req);
    console.log("Access token not found");
    return next();
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error(err);
    if (err.name === "TokenExpiredError") {
      const refreshToken = req.session.refreshToken;
      if (!refreshToken) {
        console.log("Refresh token not found");
        return next(createError(401, "You are not authenticated"));
      }
      try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH);
        const user = await User.findById(decoded.id);

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);

        res.session.accessToken = newAccessToken;
        res.session.accessToken = newRefreshToken;

        req.user = jwt.decode(newAccessToken);
        next();
      } catch (err) {
        console.error(err);
        return next(createError(401, "You are not authenticated"));
      }
    } else {
      console.error(err);
      return next(createError(403, "Invalid token"));
    }
  }
};
