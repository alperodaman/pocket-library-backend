import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Book from "../book/bookModel.js";
import { BookType } from "../utils.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    birthDate: {
      type: Date,
    },
    token: {
      required: false,
      type: String,
      default: "null",
    },
    emailCode: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("books", BookType);

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  if (user.token !== "null") {
    return user.token;
  }
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
  user.token = token;
  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login!");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login!");
  }
  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.pre("remove", async function (next) {
  const user = this;
  await Book.deleteMany({ owner: user._id });
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
