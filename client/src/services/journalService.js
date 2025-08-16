import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:7001';
const API_URL = `${API_BASE_URL}/api/journals`;

const createJournal = async (data) => {
  // Create a new journal entry
  const response = await axios.post(`${API_URL}/create`, data);
  return response.data;
};

const getAllJournals = async () => {
  // Fetch all journal entries
  const response = await axios.get(`${API_URL}/all`);
  return response.data;
};

const deleteJournal = async (id) => {
  // Delete a journal entry by ID
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

const updateJournal = async (id, data) => {
  // Update a journal entry by ID
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

const searchByTag = async (tag) => {
  // Search journals by tag
  const response = await axios.get(`${API_URL}/search?tag=${encodeURIComponent(tag)}`);
  return response.data;
};

export default {
  createJournal,
  getAllJournals,
  deleteJournal,
  updateJournal,
  searchByTag,
};
