const express = require('express');
const router = express.Router();
const { getAllOutcomeData } = require('./outcomeData.controller');

router.post('/post', getAllOutcomeData);

module.exports = router;