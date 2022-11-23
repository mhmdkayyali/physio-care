const { Router } = require("express");
const router = Router();
const {
  getAllPatients,
  getPatient,
  updatePatient,
  deletePatient,
  createAppointment,
  cancelAppointment,
  getAppointments,
} = require("../controllers/patient.controller");

router.get("/:id", getPatient);
router.get("/", getAllPatients);
