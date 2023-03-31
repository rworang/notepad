import express from "express";
import {
  getNote,
  addNote,
  updateNote,
  deleteNote,
  checkOwnership,
} from "../controllers/note.js";
import { verifyAndRefreshToken } from "../middleware/verifyAndRefreshToken.js";

const router = express.Router();

router.get("/:noteId", verifyAndRefreshToken, checkOwnership, getNote);
router.post("/new-note", verifyAndRefreshToken, addNote);
router.put(
  "/update-note/:noteId",
  verifyAndRefreshToken,
  checkOwnership,
  updateNote
);
router.delete(
  "/delete-note/:noteId",
  verifyAndRefreshToken,
  checkOwnership,
  deleteNote
);

export default router;
