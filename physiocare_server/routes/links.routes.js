const { Router } = require("express");
const router = Router();
const {
  getAllLinks,
  getLink,
  // createLink,
  updateLink,
  deleteLink,
} = require("../controllers/link.controller");

router.get("/", getAllLinks);
router.get("/:id", getLink);
// router.post("/", createLink);
router.put("/", updateLink);
router.delete("/", deleteLink);

module.exports = router;
