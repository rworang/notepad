import jwt from "jsonwebtoken";

export const generateTokens = (user) => {
  const access_token = jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    {
      expiresIn: "30s",
    }
  );

  const refresh_token = jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_REFRESH
  );

  return { access_token, refresh_token };
};

export const generateRefreshToken = (user) => {
  const payload = { id: user.id, isAdmin: user.isAdmin };
  return jwt.sign(payload, process.env.JWT_REFRESH);
};
