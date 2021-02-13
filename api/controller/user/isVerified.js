import { User } from "../../model/user/index.js";

const isVerified = async (req, res) => {
  const body = req.body;
  try {
    const user = await User.findById(body.id);
    if (user.emailCode !== body.emailCode) {
      console.log(user);
      console.log(body.emailCode);
      return res.status(400).send({ error: "Verification code is NOT match!" });
    }
    user.isVerified = true;
    user.emailCode = "";
    await user.save();
    const token = await user.generateAuthToken();
    res.status(200).json({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
};

export default isVerified;
