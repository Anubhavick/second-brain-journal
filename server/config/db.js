// server/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Mongo connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
