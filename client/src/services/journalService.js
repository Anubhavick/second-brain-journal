import axios from 'axios';
import { mockJournalService } from './mockService.js';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:7001';
const API_URL = `${API_BASE_URL}/api/journals`;

// Check if we're in demo mode (no backend available)
const isDemoMode = !API_BASE_URL.includes('localhost') && !API_BASE_URL.includes('your-backend-url');

const createJournal = async (data) => {
  if (isDemoMode) {
    return await mockJournalService.createJournal(data);
  }
  
  try {
    const response = await axios.post(`${API_URL}/create`, data);
    return response.data;
  } catch (error) {
    console.warn('Backend not available, using demo mode');
    return await mockJournalService.createJournal(data);
  }
};

const getAllJournals = async () => {
  if (isDemoMode) {
    return await mockJournalService.getAllJournals();
  }
  
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    console.warn('Backend not available, using demo mode');
    return await mockJournalService.getAllJournals();
  }
};

const deleteJournal = async (id) => {
  if (isDemoMode) {
    return await mockJournalService.deleteJournal(id);
  }
  
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.warn('Backend not available, using demo mode');
    return await mockJournalService.deleteJournal(id);
  }
};

const updateJournal = async (id, data) => {
  if (isDemoMode) {
    return await mockJournalService.updateJournal(id, data);
  }
  
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.warn('Backend not available, using demo mode');
    return await mockJournalService.updateJournal(id, data);
  }
};

const searchByTag = async (tag) => {
  if (isDemoMode) {
    return await mockJournalService.searchByTag(tag);
  }
  
  try {
    const response = await axios.get(`${API_URL}/search?tag=${encodeURIComponent(tag)}`);
    return response.data;
  } catch (error) {
    console.warn('Backend not available, using demo mode');
    return await mockJournalService.searchByTag(tag);
  }
};

export default {
  createJournal,
  getAllJournals,
  deleteJournal,
  updateJournal,
  searchByTag,
};
