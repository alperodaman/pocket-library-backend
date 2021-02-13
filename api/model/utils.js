import mongoose from "mongoose";

const UserType = {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
};

const BookType = {
  ref: "Book",
  localField: "_id",
  foreignField: "owner",
};

const StringType = {
  type: String,
  required: true,
  trim: true,
};
const BoolType = {
  type: Boolean,
  default: false,
};

export { BookType, UserType, BoolType, StringType };
