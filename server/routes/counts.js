const express = require('express');
const router = express.Router();
const { getCounts, getLastFourWeeks, getAverage } = require('../controllers/count.js')

router.get('/', getCounts);
router.get('/lastFourWeeks', getLastFourWeeks);
router.get('/average', getAverage);

module.exports = router;