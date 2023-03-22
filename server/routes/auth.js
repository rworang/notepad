import express from "express";
import { register, login, logout } from "../controllers/auth.js";

const router = express.Router();

// register user
router.post("/register", register);
// log in
router.post("/login", login);
// log out
router.post("/logout", logout);

export default router;
