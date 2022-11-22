const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

//REGISTER
router.post("/register", authController.registerUser);

//LOG IN
router.post("/login", authController.loginUser);

//LOG OUT
router.post("/logout", authController.logoutUser);


module.exports = router
