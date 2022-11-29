const {Router} = require('express')
const router = Router();
const {getAllAdmins, getAdmin, createAdmin, updateAdmin, deleteAdmin} = require('../controllers/admin.controller')

router.get("/", getAllAdmins);
router.get("/:id", getAdmin);
router.post("/", createAdmin);
router.put("/", updateAdmin)
router.delete("/", deleteAdmin)


module.exports = router;