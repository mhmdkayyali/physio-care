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
router.put("/", updatePatient);
router.delete("/", deletePatient);
router.post("/", createAppointment);
router.put("/cancel", cancelAppointment);
router.get("/appointment/:id/:user_type", getAppointments);

module.exports = router;
