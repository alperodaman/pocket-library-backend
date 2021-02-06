import { User } from "../../model/user/index.js";

const login = async (req, res) => {
  const body = req.body;
  try {
    const user = await User.findByCredentials(body.email, body.password);
    const token = await user.generateAuthToken();
    res.status(200).json({ token });
  } catch (e) {
    res.status(400).send();
  }
};

export default login;
