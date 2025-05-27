const express = require('express');
const router = express.Router();
const stakeController = require('./stake.controller');  // Import the entire controller



router.post('/postStakeData', stakeController.postStakeInfo);

module.exports = router;