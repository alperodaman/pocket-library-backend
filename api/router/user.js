import express from "express";
import auth from "../middleware/auth.js";
import {
  register,
  isVerified,
  login,
  logout,
  getProfile,
  editProfile,
  deleteProfile,
} from "../controller/user/index.js";
const router = express.Router();
router.post("/register", register);
router.post("/verified", isVerified);
router.post("/login", login);
router.post("/logout", auth, logout);
router.get("/me", auth, getProfile);
router.patch("/me", auth, editProfile);
router.delete("/me", auth, deleteProfile);

export default router;
