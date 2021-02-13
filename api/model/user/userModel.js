import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Book from "../book/bookModel.js";
import BadToken from "./badTokenModel.js";
import { BookType, BoolType, StringType } from "../utils.js";

const userSchema = new mongoose.Schema(
  {
    name: StringType,
    email: {
      ...StringType,
      unique: true,
    },
    password: StringType,
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
    isVerified: BoolType,
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
  delete userObject.token;
  delete userObject.emailCode;
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

userSchema.methods.logout = async function () {
  const token = this.token;
  if (token === "null") return;
  else {
    await BadToken.create({ token });
    this.token = "null";
    await this.save();
  }
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
  if (user.isVerified === false) {
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
