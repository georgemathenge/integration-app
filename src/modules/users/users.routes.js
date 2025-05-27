const express = require('express');
const router = express.Router();
const { getAllUsers, registerUser, authenticate } = require('./users.controller');

router.get('/', getAllUsers);
router.post('/register', registerUser);
router.post('/authenticate', authenticate);

module.exports = router;