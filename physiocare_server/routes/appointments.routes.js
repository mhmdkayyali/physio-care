const { Router } = require("express");
const router = Router();
const {
  getAllAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} = require("../controllers/appointment.controller");

router.get("/", getAllAppointments);
router.get("/:id", getAppointment);
router.post("/", createAppointment);
router.put("/", updateAppointment);
router.delete("/", deleteAppointment);

module.exports = router;
