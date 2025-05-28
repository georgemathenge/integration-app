const express = require('express');
const router = express.Router();
const { generatePrn } = require('./prnGeneration');

router.post('/generate', generatePrn);

module.exports = router;