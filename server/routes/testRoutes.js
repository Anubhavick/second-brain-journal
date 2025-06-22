const express = require('express');
const router = express.Router();
const { sayHello } = require('../controllers/journalController');

router.get('/hello', sayHello);

module.exports = router;
