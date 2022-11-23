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

const getTherapist = async (req, res) => {
  try {
    const { id } = req.params;
    const therapist = await db.users.findFirst({
      where: {
        user_type: "THERAPIST",
        id: parseInt(id),
      },
      include: {
        therapist_additional_informations: true,
      },
    });
    return res.json(therapist);
  } catch (e) {
    res.send(e.message);
  }
};
