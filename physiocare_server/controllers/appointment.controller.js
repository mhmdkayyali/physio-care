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
