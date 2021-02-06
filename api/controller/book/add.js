import { Book, addBookValidation } from "../../model/book/index.js";
const add = async (req, res) => {
  const body = req.body;
  const { error } = addBookValidation(body);
  if (error) {
    return res.status(400).json(error.details[0].message);
  }
  const book = new Book({
    ...body,
    owner: req.user._id,
  });
  try {
    await book.save();
    res.status(201).json({ book });
  } catch (e) {
    res.status(400).send(e);
  }
};

export default add;
