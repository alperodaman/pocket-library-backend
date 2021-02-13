const logout = async (req, res) => {
  try {
    await req.user.logout();
    res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
};

export default logout;
