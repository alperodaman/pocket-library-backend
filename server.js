dotenv.config();
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./api/router/index.js";
import "./api/utils/db.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`PockerLibrary is running now at port ${PORT}!`)
);
