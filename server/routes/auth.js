import express from "express";
import {
  register,
  login,
  logout,
  refreshSession,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-session", refreshSession);

export default router;
