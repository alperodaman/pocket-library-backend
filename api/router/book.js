import express from "express";
import auth from "../middleware/auth.js";
import {
  add,
  getAll,
  getBookById,
  updateBook,
  deleteBook,
} from "../controller/book/index.js";
const router = express.Router();
router.post("/add", auth, add);
router.get("/getAll", auth, getAll);
router.get("/:id", auth, getBookById);
router.patch("/:id", auth, updateBook);
router.delete("/:id", auth, deleteBook);

export default router;
