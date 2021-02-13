import mongoose from "mongoose";
import { BoolType, StringType, UserType } from "../utils.js";

const bookSchema = new mongoose.Schema(
  {
    title: StringType,
    author: StringType,
    translator: StringType,
    publisher: StringType,
    description: StringType,
    completed: BoolType,
    category: StringType,
    ISBN: StringType,
    owner: UserType,
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
