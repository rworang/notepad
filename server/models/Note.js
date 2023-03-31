import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    keywords: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Note", NoteSchema);
