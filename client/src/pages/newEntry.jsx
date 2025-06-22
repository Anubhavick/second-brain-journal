import React, { useState } from 'react';
import journalService from '../services/journalService';
import { useNavigate } from 'react-router-dom';

const NewEntry = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState(''); // comma separated
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tagsArray = tags.split(',').map(t => t.trim()).filter(Boolean);
      await journalService.createJournal({ title, content, tags: tagsArray });
      navigate('/');
    } catch (error) {
      alert('Error saving journal entry');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📝 New Journal Entry</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          style={{ width: '100%', marginBottom: '1rem', fontSize: '1.1rem', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          cols={50}
          placeholder="Write your thoughts here..."
          required
        />
        <br />
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma separated, e.g. work, personal, idea)"
          style={{ width: '100%', margin: '1rem 0', fontSize: '1rem', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button type="submit">Save Entry</button>
      </form>
    </div>
  );
};

export default NewEntry;
