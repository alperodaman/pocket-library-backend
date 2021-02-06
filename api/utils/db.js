import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("Succesfully connected to the database!")
);
