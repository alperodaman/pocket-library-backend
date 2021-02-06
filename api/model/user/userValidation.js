import Joi from "Joi";
import objectId from "joi-objectid";
Joi.objectId = objectId(Joi);

const registerValidation = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required().messages({
      "any.required": "Please enter your full name!",
      "string.min": "Please enter your fullname!",
    }),
    email: Joi.string().email().min(6).required().messages({
      "any.required": "Please enter a valid email!",
      "string.min": "Please enter a valid email name!",
      "string.email": "Please enter a valid email",
    }),
    password: Joi.string().min(7).required().messages({
      "any.required": "Please enter your password!",
      "string.min": "Please enter  a password that longer than 7 characters",
    }),
  });
  return schema.validate(user);
};

const loginValidation = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().min(6).required().messages({
      "any.required": "Please enter a valid email!",
      "string.min": "Please enter a valid email name!",
      "string.email": "Please enter a valid email",
    }),
    password: Joi.string().min(7).required().messages({
      "any.required": "Please enter your password!",
      "string.min": "Please enter  a password that longer than 7 characters",
    }),
  });
  return schema.validate(user);
};

const sendMailCodeValidation = (user) => {
  const schema = Joi.objectId({
    email: Joi.string().email().min(6).required().messages({
      "any.required": "Please enter a valid email!",
      "string.min": "Please enter a valid email name!",
      "string.email": "Please enter a valid email",
    }),
  });
  return schema.validate(user);
};

const changePasswordValidation = (user) => {
  const schema = Joi.object({
    password: Joi.string().min(7).required().messages({
      "any.required": "Please enter your password!",
      "string.min": "Please enter  a password that longer than 7 characters",
    }),
    newPassword: Joi.string().min(7).required().messages({
      "any.required": "Please enter your password!",
      "string.min": "Please enter  a password that longer than 7 characters",
    }),
  });
  return schema.validate(user);
};

export {
  loginValidation,
  registerValidation,
  sendMailCodeValidation,
  changePasswordValidation,
};
