import { User, registerValidation } from "../../model/user/index.js";
import { genereateCode } from "../../utils/generateCode.js";
import { verificationSendEmail } from "../../utils/sendmailer.js";

const register = async (req, res) => {
  const { error } = registerValidation(req.body);
  const { email } = req.body;
  if (error) {
    return res.status(400).json(error.details[0].message);
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).send({ error: "Email Already exist!" });
  }

  try {
    const emailCode = genereateCode();
    const user = new User({ ...req.body, emailCode });
    await user.save();
    await verificationSendEmail(user.email, emailCode);
    const token = await user.generateAuthToken();
    res.status(201).json({ token });
  } catch (e) {
    res.status(400).send(e);
  }
};

export default register;
