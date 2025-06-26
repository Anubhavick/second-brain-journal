const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { transcribeAudio } = require('../speechToText');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// POST /api/speech-to-text
router.post('/', upload.single('audio'), async (req, res) => {
  try {
    const filePath = req.file.path;
    const transcript = await transcribeAudio(filePath);
    fs.unlinkSync(filePath); // Clean up uploaded file
    res.json({ transcript });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
