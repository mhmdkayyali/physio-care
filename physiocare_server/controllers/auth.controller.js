const db = require("../config/db.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.users.findFirst({
      where: {
        email,
      },
      include: {
        pt_additional_informations: true,
        therapist_additional_informations: true,
      },
    });

    if (!user) {
      return res.status(400).send("Invalid credentials");
    }

    const checkPass = await bcrypt.compare(password, user.password);

    if (!checkPass) {
      return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET_KEY);

    return res.json({ user, token });
  } catch (err) {
    console.log(err);
  }
};
