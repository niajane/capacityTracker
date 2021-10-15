const express = require('express');
const router = express.Router();
const { getCounts, getLastFourWeeks, getAverage, getAvDay } = require('../controllers/count.js')

router.get('/', getCounts);
router.get('/lastFourWeeks', getLastFourWeeks);
router.get('/average', getAverage);
router.get('/avDay/:day', getAvDay)

module.exports = router;