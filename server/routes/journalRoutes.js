const express = require('express');
const router = express.Router();
const { createJournal, getJournals, getbyid, deleteJournal, searchByTag, updateJournal } = require('../controllers/journalController');
const validateJournal = require('../middleware/validateJournal');


// POST /api/journals/create - Create a new journal entry
router.post('/create', validateJournal, createJournal);

// GET /api/journals/all - Get all journal entries
router.get('/all', getJournals);

// GET /api/journals/:id - Get journal by id
router.get('/:id', getbyid);

// DELETE /api/journals/:id - Delete a journal entry
router.delete('/:id', deleteJournal);

// GET /api/journals/search?tag=tagname - Search journals by tag
router.get('/search', searchByTag);

// PUT /api/journals/:id - Update a journal entry
router.put('/:id', validateJournal, updateJournal);

module.exports = router;
