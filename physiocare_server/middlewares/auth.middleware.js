const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const admin = await db.users.findFirst({
      where: {
        email: decode.email,
      },
    });

    req.user = admin;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { authMiddleware };
