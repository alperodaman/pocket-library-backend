import { User } from "../../model/user/index.js";
import { genereateCode } from "../../utils/generateCode.js";
import { verificationSendEmail } from "../../utils/sendmailer.js";

const sendCodeAgain = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send({ error: "Email does NOT exist!" });
  }
  try {
    const emailCode = genereateCode();
    user.emailCode = emailCode;
    await user.save();
    await verificationSendEmail(user.email, emailCode);
    res.status(201).json({ massage: "Check Your Email" });
  } catch (e) {
    res.status(400).send(e);
  }
};

export default sendCodeAgain;
