import axios from 'axios';

const API_URL = 'http://localhost:7001/api/journals';

const createJournal = async (data) => {
  // Use the correct endpoint for creating a journal
  const response = await axios.post(`${API_URL}/create`, data);
  return response.data;
};

const getAllJournals = async () => {
  // Use the correct endpoint for fetching all journals
  const response = await axios.get(`${API_URL}/all`);
  return response.data;
};

const deleteJournal = async (id) => {
  // Use the correct endpoint for deleting a journal
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

const updateJournal = async (id, data) => {
  // Use the correct endpoint for updating a journal
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

const searchByTag = async (tag) => {
  // Use the correct endpoint for searching journals by tag
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
