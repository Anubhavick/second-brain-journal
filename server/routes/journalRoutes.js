const express = require('express');
const router = express.Router();
const { createJournal, getJournals, getbyid } = require('../controllers/journalController');
const validateJournal = require('../middleware/validateJournal');


// POST /api/journals/create - Create a new journal entry
router.post('/create', validateJournal, createJournal);

// GET /api/journals/all - Get all journal entries
router.get('/all', getJournals);

// GET /api/journals/:id - Get journal by id
router.get('/:id', getbyid);

module.exports = router;
