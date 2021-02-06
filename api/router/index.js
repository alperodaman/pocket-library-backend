import express from "express";
import user from "./user.js";
import book from "./book.js";
const router = express.Router();

router.use("/user", user);
router.use("/book", book);

export default router;
