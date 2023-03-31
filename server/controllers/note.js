import Note from "../models/Note.js";
import User from "../models/User.js";

// Middleware to check if user is authenticated and the owner of the note
export const checkOwnership = async (req, res, next) => {
  try {
    const noteId = req.params.noteId;
    const note = await Note.findById(noteId);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.userId !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You do not have permission to access this note" });
    }

    req.note = note;
    next();
  } catch (err) {
    next(err);
  }
};

// Controller function to get a note
export const getNote = async (req, res, next) => {
  try {
    const noteId = req.params.noteId;
    const note = await Note.findById(noteId);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (err) {
    next(err);
  }
};

// Controller function to add a new note
export const addNote = async (req, res, next) => {
  try {
    const { title, content, keywords } = req.body;
    const userId = req.user.id;

    const newNote = new Note({
      userId,
      title,
      content,
      keywords,
    });
    await newNote.save();

    const user = await User.findById(userId);
    user.notes.push(newNote._id);
    await user.save();

    res
      .status(201)
      .json({ message: "Note created successfully", note: newNote });
  } catch (err) {
    next(err);
  }
};

// Controller function to update a note
export const updateNote = async (req, res, next) => {
  try {
    const { title, content, keywords } = req.body;
    const note = req.note;
    note.title = title;
    note.content = content;
    note.keywords = keywords;
    await note.save();
    res.status(200).json(note);
  } catch (err) {
    next(err);
  }
};

// Controller function to delete a note
export const deleteNote = async (req, res, next) => {
  try {
    const note = req.note;
    await note.remove();
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    next(err);
  }
};
