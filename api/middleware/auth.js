import jwt from "jsonwebtoken";
import { BadToken, User } from "../model/user/index.js";
import dotenv from "dotenv";
dotenv.config();

const auth = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (token.includes("Bearer")) {
      token = token.replace("Bearer ", "");
    }
    const checkAuth = await BadToken.findOne({ token });
    if (checkAuth) {
      return res
        .status(401)
        .send({ error: "User already logged out, to do this action log in!" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decode._id, token: token });
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

export default auth;
