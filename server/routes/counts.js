const express = require('express');
const router = express.Router();
const { getCounts, getLastFourWeeks, getAverage, getAvDay, getAllDays } = require('../controllers/count.js')

router.get('/', getCounts);
router.get('/lastFourWeeks', getLastFourWeeks);
router.get('/average', getAverage);
router.get('/avDay/:day', getAvDay)
router.get('/allDaysAverage', getAllDays)

module.exports = router;