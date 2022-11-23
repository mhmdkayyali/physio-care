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

const createAppointment = async (req, res) => {
  try {
    const { meeting_link, ...data } = req.body;
    const createdAppointment = await db.appointments.create({
      data: {
        ...data,
        date_time: req.body.date_time
          ? new Date(req.body.date_time)
          : undefined,
        canceled_at: req.body.canceled_at
          ? new Date(req.body.canceled_at)
          : undefined,
        meeting_links: {
          create: {
            meeting_link,
          },
        },
      },
    });
    return res.json(createdAppointment);
  } catch (e) {
    res.send(e.message);
  }
};

const updateAppointment = async (req, res) => {
  try {
    const { id, meeting_link, ...data } = req.body;
    const updatedAppointment = await db.appointments.update({
      data: {
        ...data,
        date_time: req.body.date_time
          ? new Date(req.body.date_time)
          : undefined,
        canceled_at: req.body.canceled_at
          ? new Date(req.body.canceled_at)
          : undefined,
        meeting_links: {
          update: {
            meeting_link,
          },
        },
      },
      where: {
        id: parseInt(id),
      },
    });
    return res.json(updatedAppointment);
  } catch (e) {
    res.send(e.message);
  }
};
