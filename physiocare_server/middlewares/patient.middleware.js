const patientMiddleware = (req, res, next) => {
  if (req.user.user_type === "PATIENT") next();
  return res.status(401).json({ message: "Unauthorized" });
};

module.exports = { patientMiddleware };
