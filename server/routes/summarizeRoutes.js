const express = require('express');
const router = express.Router();
const { summarizeJournal } = require('../controllers/summarizeController');

router.post('/summarize', summarizeJournal);

module.exports = router;
