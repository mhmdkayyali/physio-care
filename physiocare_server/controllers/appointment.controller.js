const db = require("../config/db.config");

const getAllAppointments = async (req, res) => {
  try {
    const appointment = await db.appointments.findMany({
      include: {
        meeting_links: true,
      },
    });
    return res.json(appointment);
  } catch (e) {
    res.send(e.message);
  }
};

const getAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await db.appointments.findFirst({
      where: {
        id: parseInt(id),
      },
      include: {
        meeting_links: true,
      },
    });
    return res.json(appointment);
  } catch (e) {
    res.send(e.message);
  }
};
