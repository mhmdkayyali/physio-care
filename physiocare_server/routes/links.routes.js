const { Router } = require("express");
const router = Router();
const {
  getAllLinks,
  getLink,
  updateLink,
} = require("../controllers/link.controller");
