const logout = async (req, res) => {
  try {
    req.user.token = "null";
    await req.user.save();
    res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
};

export default logout;
