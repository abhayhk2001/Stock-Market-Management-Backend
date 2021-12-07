const getMe = async (req, res) => {
  var admin = true;
  if (admin) {
    res.status(200).json({
      message: "Found",
      admin,
    });
  } else {
    res.status(400).json({
      message: "Bad request",
    });
  }
};

module.exports = { getMe };
