import mongoose from "mongoose";
import { UserType } from "../utils.js";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    translator: {
      type: String,
      required: true,
      trim: true,
    },
    publisher: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    ISBN: {
      type: String,
      required: true,
      trim: true,
    },
    owner: UserType,
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
