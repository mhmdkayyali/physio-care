const adminMiddleware = (req, res, next) => {
  if (req.user.user_type === "ADMIN") next();
  return res.status(401).json({ message: "Unauthorized" });
};

module.exports = { adminMiddleware };
