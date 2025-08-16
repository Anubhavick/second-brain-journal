import axios from 'axios';
import { mockSummarizeService } from './mockService.js';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:7001';
const SUMMARIZE_URL = `${API_BASE_URL}/api/summarize/summarize`;

// Check if we're in demo mode (no backend available)
const isDemoMode = !API_BASE_URL.includes('localhost') && !API_BASE_URL.includes('your-backend-url');

export const summarizeJournal = async (content) => {
  if (isDemoMode) {
    return await mockSummarizeService.summarizeJournal(content);
  }
  
  try {
    const response = await axios.post(SUMMARIZE_URL, { content });
    return response.data;
  } catch (error) {
    console.warn('Backend not available, using demo mode for summarization');
    return await mockSummarizeService.summarizeJournal(content);
  }
};
