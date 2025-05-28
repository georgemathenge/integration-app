const express = require('express');
const router = express.Router();
const { generatePrn } = require('./prnGeneration.controller');

router.post('/generate', generatePrn);

module.exports = router;