// Mock service for demo purposes when backend is not available
const mockJournals = [
  {
    id: '1',
    title: 'My First Journal Entry',
    content: 'This is a demo journal entry to showcase the application features.',
    tags: ['demo', 'first-entry'],
    mood: 'happy',
    date: new Date().toISOString(),
    summary: 'A demo entry showcasing the journal application.'
  },
  {
    id: '2',
    title: 'Learning React and AI Integration',
    content: 'Today I worked on integrating OpenAI API with my React application. The experience was quite rewarding.',
    tags: ['learning', 'react', 'ai'],
    mood: 'excited',
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    summary: 'Working on React and AI integration was rewarding.'
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockJournalService = {
  async createJournal(data) {
    await delay(500);
    const newJournal = {
      id: Date.now().toString(),
      ...data,
      date: new Date().toISOString()
    };
    mockJournals.unshift(newJournal);
    return { success: true, data: newJournal };
  },

  async getAllJournals() {
    await delay(300);
    return { success: true, data: mockJournals };
  },

  async deleteJournal(id) {
    await delay(200);
    const index = mockJournals.findIndex(journal => journal.id === id);
    if (index > -1) {
      mockJournals.splice(index, 1);
    }
    return { success: true };
  },

  async updateJournal(id, data) {
    await delay(400);
    const index = mockJournals.findIndex(journal => journal.id === id);
    if (index > -1) {
      mockJournals[index] = { ...mockJournals[index], ...data };
      return { success: true, data: mockJournals[index] };
    }
    return { success: false, error: 'Journal not found' };
  },

  async searchByTag(tag) {
    await delay(300);
    const filtered = mockJournals.filter(journal => 
      journal.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
    );
    return { success: true, data: filtered };
  }
};

export const mockSummarizeService = {
  async summarizeJournal(content) {
    await delay(1000);
    // Simple mock summarization
    const sentences = content.split('.').filter(s => s.trim().length > 10);
    const summary = sentences.slice(0, 2).join('.') + '.';
    return { 
      success: true, 
      data: { 
        summary: summary || 'This is a demo summary of your journal entry.' 
      } 
    };
  }
};
