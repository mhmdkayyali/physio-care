const { Router } = require("express");
const router = Router();
const {
  login,
  signupPatient,
  signupTherapist,
} = require("../controllers/auth.controller");
