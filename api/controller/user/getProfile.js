const getProfile = async (req, res) => {
  res.status(200).json(req.user);
};

export default getProfile;
