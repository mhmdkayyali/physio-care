const { Router } = require("express");
const router = Router();
const {
  getAllTherapists,
  getTherapist,
  updateTherapist,
  deleteTherapist,
} = require("../controllers/therapist.controller");

router.get("/", getAllTherapists);
router.get("/:id", getTherapist);
