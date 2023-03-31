import jwt from "jsonwebtoken";
import { generateTokens } from "../utils/generateTokens.js";
import User from "../models/User.js";

export const verifyAndRefreshToken = async (req, res, next) => {
  const session = req.session;
  const access_token = session && session.access_token;
  const refresh_token = session && session.refresh_token;

  if (!access_token || !refresh_token) {
    return res.status(401).json({ message: "Unauthorized 1" });
  }

  try {
    const decoded = jwt.verify(access_token, process.env.JWT_SECRET);
    req.user = decoded;

    return next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      try {
        const decodedRefreshToken = jwt.verify(
          refresh_token,
          process.env.JWT_REFRESH
        );
        const userId = decodedRefreshToken.id;
        const user = await User.findById(userId).lean();

        if (!user) {
          return res.status(401).json({ message: "Unauthorized 4" });
        }

        const newTokens = generateTokens(user);

        req.session.access_token = newTokens.access_token;
        req.session.refresh_token = newTokens.refresh_token;

        req.user = user;

        return next();
      } catch (err) {
        return res.status(401).json({ message: "Unauthorized 3" });
      }
    } else {
      return res.status(401).json({ message: "Unauthorized 2" });
    }
  }
};
