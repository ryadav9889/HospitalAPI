const express = require('express');
const router = express.Router();
const home_controller = require('../controllers/home_controller')


router.get('/',home_controller.home);
router.use('/doctors',require('./doctors'));
router.use('/patients',require('./patients'));
router.use('/report',require('./report'));



module.exports = router;
