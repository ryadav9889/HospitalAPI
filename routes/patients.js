
const express = require('express');
const router = express.Router();
const passport = require('passport');
const patientController = require('../controllers/patients_controller')
const reportController = require('../controllers/report_controller');


router.post('/register',passport.authenticate('jwt',{session:false}),patientController.createPatient);
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),patientController.create);
router.post('/:id/get_allReport',passport.authenticate('jwt', {session:false}),patientController.allReports);







module.exports = router;