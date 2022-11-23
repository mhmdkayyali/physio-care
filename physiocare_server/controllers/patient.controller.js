const db = require("../config/db.config");

const getAllPatients = async (req, res) => {
  try {
    const patients = await db.users.findMany({
      where: {
        user_type: "PATIENT",
      },
      include: {
        pt_additional_informations: true,
      },
    });

    return res.json(patients);
  } catch (e) {
    res.status(500).send(e);
  }
};
