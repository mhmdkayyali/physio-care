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

const getPatient = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await db.users.findFirst({
      where: {
        user_type: "PATIENT",
        id: parseInt(id),
      },
      include: {
        pt_additional_informations: true,
      },
    });
    return res.json(patient);
  } catch (e) {
    res.send(e.message);
  }
};

const createPatient = async (req, res) => {
  try {
    const { diagnosis, case_date, treating_doctor, ...data } = req.body;
    const createdPatient = await db.users.create({
      data: {
        ...data,
        dob: new Date(req.body.dob),
        pt_additional_informations: {
          create: {
            diagnosis,
            case_date: new Date(req.body.case_date),
            treating_doctor,
          },
        },
      },
    });
    return res.json(createdPatient);
  } catch (e) {
    res.send(e.message);
  }
};

const updatePatient = async (req, res) => {
  try {
    const { id, diagnosis, treating_doctor, dob, ...data } = req.body;
    const updatedPatient = await db.users.update({
      data: {
        ...data,
        dob: new Date(dob),
        pt_additional_informations: {
          create: {
            diagnosis: req.body.pt_additional_informations.case_date,
            case_date: new Date(req.body.pt_additional_informations.case_date),
            treating_doctor,
          },
        },
      },
      where: {
        id: parseInt(id),
      },
    });
    return res.json(updatedPatient);
  } catch (e) {
    res.send(e.message);
  }
};

const deletePatient = async (req, res) => {
  try {
    const { id } = req.body;
    await db.users.delete({
      where: {
        id,
      },
    });
    return res.json({
      Response: "Success",
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

const createAppointment = async (req, res) => {
  try {
    const { patient_id, therapist_id, date_time, time, meeting_link, ...data } =
      req.body;
    const createdAppointment = await db.appointments.create({
      data: {
        ...data,
        time: time,
        date_time: new Date(req.body.date_time),
        patient_id: parseInt(patient_id),
        therapist_id: parseInt(therapist_id),
        meeting_links: {
          create: {
            meeting_link: meeting_link,
          },
        },
      },
    });
    return res.json(createdAppointment);
  } catch (e) {
    res.send(e.message);
  }
};

const getAppointments = async (req, res) => {
  try {
    const { id, user_type } = req.params;
    if (user_type === "PATIENT") {
      const appointment = await db.appointments.findMany({
        where: {
          patient_id: parseInt(id),
        },
        include: {
          meeting_links: true,
          patient: {
            include: {
              pt_additional_informations: true,
            },
          },
          therapist: {
            include: {
              therapist_additional_informations: true,
            },
          },
        },
      });
      return res.json(appointment);
    } else {
      const appointment = await db.appointments.findMany({
        where: {
          therapist_id: parseInt(id),
        },
        include: {
          meeting_links: true,
          patient: {
            include: {
              pt_additional_informations: true,
            },
          },
          therapist: {
            include: {
              therapist_additional_informations: true,
            },
          },
        },
      });
      return res.json(appointment);
    }
  } catch (e) {
    res.send(e.message);
  }
};

const cancelAppointment = async (req, res) => {
  try {
    const { id } = req.body;
    const appointment = await db.appointments.update({
      data: {
        canceled_at: new Date(),
      },
      where: {
        id: parseInt(id),
      },
    });
    return res.json(appointment);
  } catch (e) {
    res.send(e.message);
  }
};

module.exports = {
  getAllPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
  createAppointment,
  cancelAppointment,
  getAppointments,
};
