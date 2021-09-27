const express = require('express');
const router = express.Router();
const { getCounts} = require('../controllers/count.js')

router.get('/', getCounts);

module.exports = router;