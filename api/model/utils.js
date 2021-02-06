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

export { BookType, UserType };
