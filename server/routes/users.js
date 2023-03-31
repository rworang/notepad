import express from "express";
import { update, deleteUser, findUserById } from "../controllers/user.js";
import { verifyAndRefreshToken } from "../middleware/verifyAndRefreshToken.js";

const router = express.Router();

// update user
router.put("/:id", verifyAndRefreshToken, update);

// delete user
router.delete("/:id", verifyAndRefreshToken, deleteUser);

// get user
router.get("/find/:id", verifyAndRefreshToken, findUserById);

export default router;
