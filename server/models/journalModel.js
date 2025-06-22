// server/models/journalModel.js
const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  summary: { type: String },
  mood: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Journal', journalSchema);
