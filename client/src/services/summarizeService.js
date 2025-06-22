import axios from 'axios';

const SUMMARIZE_URL = 'http://localhost:7001/api/summarize/summarize';

export const summarizeJournal = async (content) => {
  const response = await axios.post(SUMMARIZE_URL, { content });
  return response.data;
};
