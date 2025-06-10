const logout = (req, res) => {
  console.log("logging out", req.body);
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
  });
  res.status(200).send({ success: true });
};

module.exports = logout;
