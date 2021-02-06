import Joi from "joi";
import objectId from "joi-objectid";
Joi.objectId = objectId(Joi);

const addBookValidation = (book) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required().messages({
      "any.required": "Please enter book title!",
      "string.min": "Please enter book title!",
    }),
    author: Joi.string().min(6).required().messages({
      "any.required": "Please enter author!",
      "string.min": "Please enter author!",
    }),
    translator: Joi.string().min(6).required().messages({
      "any.required": "Please enter translator!",
      "string.min": "Please enter translator!",
    }),
    publisher: Joi.string().min(6).required().messages({
      "any.required": "Please enter publisher!",
      "string.min": "Please enter publisher!",
    }),
    description: Joi.string().min(6).required().messages({
      "any.required": "Please enter description!",
      "string.min": "Please enter description!",
    }),
    category: Joi.string().min(6).required().messages({
      "any.required": "Please enter category!",
      "string.min": "Please enter category!",
    }),
    ISBN: Joi.string().min(6).required().messages({
      "any.required": "Please enter ISBN!",
      "string.min": "Please enter ISBN!",
    }),
  });
  return schema.validate(book);
};

export {
    addBookValidation
  };