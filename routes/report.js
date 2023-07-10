const express = require('express');
const router = express.Router();
const passport = require('passport');
const reports_controller = require('../controllers/report_controller');

router.get('/:status',passport.authenticate('jwt', {session:false}),reports_controller.fetchReports);



module.exports = router;