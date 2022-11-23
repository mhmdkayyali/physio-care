const db = require("../config/db.config");

const getAllTherapists = async (req, res) => {
  try {
    const therapists = await db.users.findMany({
      where: {
        user_type: "THERAPIST",
      },
      include: {
        therapist_additional_informations: true,
      },
    });

    return res.json(therapists);
  } catch (e) {
    res.status(500).send(e);
  }
};
