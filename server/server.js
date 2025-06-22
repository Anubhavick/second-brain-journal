require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const connectDB = require('./config/db');
connectDB();

const app = express();

// Test route BEFORE any middleware
app.get('/test', (req, res) => {
  res.send('Test route working');
});

app.use(cors());
app.use(express.json());
app.use(logger);

// ROUTES
const journalRoutes = require('./routes/journalRoutes');
const summarizeRoutes = require('./routes/summarizeRoutes');
app.use('/api/journals', journalRoutes);
app.use('/api/summarize', summarizeRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use(errorHandler);

const PORT = process.env.PORT || 7001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
