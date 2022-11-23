const therapistMiddleware = (req, res, next) => {
  if (req.user.user_type === "THERAPIST") next();
  return res.status(401).json({ message: "Unauthorized" });
};

module.exports = { therapistMiddleware };
