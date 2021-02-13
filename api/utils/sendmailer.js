import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

const verificationSendEmail = async (
  targetMail,
  verificationCode,
  subject = "Email Verification"
) => {
  const message = `Welcome to Your own Pocket Library\r\nHere your verification code - ${verificationCode}`;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.mailerEmail,
        pass: process.env.mailerPassword,
      },
    });

    await transporter.sendMail({
      from: `"${process.env.mailerTitle} 👻" <${process.env.mailerEmail}>`,
      to: targetMail,
      subject,
      text: `${process.env.mailerTitle} 👻`,
      html: `<p>${message}</p>`,
    });
  } catch (error) {
    console.log(error);
  }
};
//send forget password mail -> forgetPassword

//send we will miss you mail -> deleteProfile

export { verificationSendEmail };
