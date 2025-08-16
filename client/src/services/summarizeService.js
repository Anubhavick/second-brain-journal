import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:7001';
const SUMMARIZE_URL = `${API_BASE_URL}/api/summarize/summarize`;

export const summarizeJournal = async (content) => {
  // Summarize a journal entry
  const response = await axios.post(SUMMARIZE_URL, { content });
  return response.data;
};
