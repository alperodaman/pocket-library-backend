const getAll = async (req, res) => {
  try {
    await req.user
      .populate({
        path: "books",
      })
      .execPopulate();
    res.status(200).json(req.user.books);
  } catch (e) {
    res.status(500).send();
  }
};

export default getAll;
