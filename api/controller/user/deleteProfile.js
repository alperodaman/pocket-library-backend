const deleteProfile = async (req, res) => {
  try {
    await req.user.remove();
    res.status(200).json(req.user);
  } catch (e) {
    res.status(500).send();
  }
};

export default deleteProfile;
