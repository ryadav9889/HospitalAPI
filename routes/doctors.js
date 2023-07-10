const express = require('express');
const router = express.Router();
const doctorsController = require('../controllers/doctors_controller')

router.post('/register',doctorsController.signUp);
router.post('/login',doctorsController.signIn);



module.exports = router;