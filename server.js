import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./api/router/index.js";
dotenv.config();
import "./api/utils/db.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`PockerLibrary is running now at port ${PORT}!`)
);
