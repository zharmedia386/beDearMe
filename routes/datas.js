const express = require('express')
const datac = require('../controllers/dataController')
const router = express.Router()

router.get("/data", datac.viewAll)
router.get("/data/:id", datac.getById)
router.get("/dataDate/:date", datac.getByDate)
router.post("/postData", datac.postData)
router.delete("/deleteData/:id", datac.deleteData)
router.put("/updateData/:id", datac.updateData)


module.exports = router