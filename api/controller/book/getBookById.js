import { Book } from "../../model/book/index.js";
const getBookById = async (req, res) => {
  const _id = req.params.id;
  try {
    const book = await Book.findOne({ _id, owner: req.user._id });
    if (!book) {
      return res.status(404).send();
    }
    res.status(200).json({ book });
  } catch (e) {
    res.status(500).send();
  }
};

export default getBookById;
