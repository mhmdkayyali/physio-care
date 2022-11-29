const { Router } = require("express");
const router = Router();
const { login } = require("../controllers/auth.controller");
const {
  signupPatient,
  signupTherapist,
} = require("../controllers/auth.controller");

router.post("/login", login);
router.post("/patient", signupPatient);
router.post("/therapist", signupTherapist);

module.exports = router;
