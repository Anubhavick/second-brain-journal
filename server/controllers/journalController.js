// server/controllers/journalController.js
const Journal = require('../models/journalModel');


// POST /api/journals/create
exports.createJournal = async (req, res) => {
  try {
    const { title, content, summary, mood } = req.body;
    const newEntry = await Journal.create({ title, content, summary, mood });
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create journal entry' });
  }
};

// GET /api/journals/all
exports.getJournals = async (req, res) => {
  try {
    const journals = await Journal.find().sort({ createdAt: -1 });
    res.json(journals);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch journal entries' });
  }
};

// Get /api/journals/id
exports.getbyid = async (req, res) => {
  const journal = await Journal.findById(req.params.id);
  if (!journal) return res.status(404).json({ message: "Not found" });
  res.json(journal);
}

