// server/controllers/journalController.js
const Journal = require('../models/journalModel');


// POST /api/journals/create
exports.createJournal = async (req, res) => {
  try {
    const { title, content, summary, mood, tags } = req.body;
    const newEntry = await Journal.create({ title, content, summary, mood, tags });
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
};

// DELETE /api/journals/:id
exports.deleteJournal = async (req, res) => {
  try {
    const deleted = await Journal.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Journal not found' });
    res.json({ message: 'Journal deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete journal entry' });
  }
};

// GET /api/journals/search?tag=tagname - Find journals by tag
exports.searchByTag = async (req, res) => {
  const tag = req.query.tag && req.query.tag.trim().toLowerCase();
  if (!tag) return res.status(400).json({ error: 'Tag is required' });
  try {
    const journals = await Journal.find({ tags: { $elemMatch: { $regex: `^${tag}$`, $options: 'i' } } }).sort({ createdAt: -1 });
    res.json(journals);
  } catch (err) {
    res.status(500).json({ error: 'Failed to search by tag' });
  }
};

// PUT /api/journals/:id
exports.updateJournal = async (req, res) => {
  try {
    const { title, content, summary, mood, tags } = req.body;
    const updated = await Journal.findByIdAndUpdate(
      req.params.id,
      { title, content, summary, mood, tags },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'Journal not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update journal entry' });
  }
};

