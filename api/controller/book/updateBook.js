import { Book } from "../../model/book/index.js";
const updateBook = async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  try {
    const book = await Book.findOne({ _id, owner: req.user._id });
    if (!book) {
      return res.status(404).send();
    }
    updates.forEach((update) => (book[update] = req.body[update]));
    await book.save();
    res.status(200).json({ book });
  } catch (e) {
    res.status(500).send();
  }
};

export default updateBook;
