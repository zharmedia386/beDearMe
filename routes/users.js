const express = require('express')
const userc = require('../controllers/userController')
const router = express.Router()

router.post("/signIn", userc.signIn)
router.post("/signUp", userc.signUp)


module.exports = router;
