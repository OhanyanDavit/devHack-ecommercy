const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');
router.post('/', createUser);
router.get('/', createUser);

module.exports = router;
