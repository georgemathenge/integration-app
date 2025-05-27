const express = require('express');
const router = express.Router();
const { getAllOutcomeData } = require('./outcomeData.controller');

router.get('/', getAllOutcomeData);

module.exports = router;