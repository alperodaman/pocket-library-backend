import mongoose from "mongoose";

const badTokenModel = new mongoose.Schema({
  token: {},
});

const BadToken = mongoose.model("BadToken", badTokenModel);

export default BadToken;
