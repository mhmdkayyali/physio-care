const { Router } = require("express");
const router = Router();
const {
  getAllAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
} = require("../controllers/appointment.controller");

router.get("/", getAllAppointments);
