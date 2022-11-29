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

const signupPatient = async (req, res) => {
  const { password, diagnosis, case_date, treating_doctor, ...data } = req.body;
  console.log(password);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdPatient = await db.users.create({
      data: {
        password: hashedPassword,
        ...data,
        dob: new Date(req.body.dob),
        pt_additional_informations: {
          create: {
            diagnosis: req.body.diagnosis,
            case_date: new Date(req.body.case_date),
            treating_doctor: req.body.treating_doctor,
          },
        },
        therapist_additional_informations: undefined,
      },
    });

    const token = jwt.sign(
      { email: createdPatient.email },
      process.env.JWT_SECRET_KEY
    );
    res.json({ id: createdPatient.id, token });
  } catch (err) {
    console.error(err);
    res.status(400).send({ message: err.message });
  }
};

const signupTherapist = async (req, res) => {
  const {
    specialty,
    profile_picture,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
    start_time,
    end_time,
    password,
    rate,
    ...data
  } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdTherapist = await db.users.create({
      data: {
        password: hashedPassword,
        ...data,
        dob: new Date(req.body.dob),
        therapist_additional_informations: {
          create: {
            specialty,
            profile_picture,
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday,
            start_time,
            end_time,
            rate,
          },
        },
      },
    });

    const token = jwt.sign(
      { email: createdTherapist.email },
      process.env.JWT_SECRET_KEY
    );
    res.json({ id: createdTherapist.id, token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const test = async (req, res) => {
  res.send(req);
};

module.exports = { login, signupPatient, signupTherapist, test };
