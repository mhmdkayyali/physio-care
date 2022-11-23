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
    // console.log(case_date);
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
