import React, { useState, useEffect } from 'react';
import { summarizeJournal } from '../services/summarizeService';

const JournalModal = ({ entry, onClose }) => {
  const [summarizing, setSummarizing] = useState(false);
  const [summary, setSummary] = useState(entry?.summary || '');

  useEffect(() => {
    setSummary(entry?.summary || '');
  }, [entry]);

  const handleSummarize = async () => {
    setSummarizing(true);
    try {
      const res = await summarizeJournal(entry.content);
      setSummary(res.summary);
    } catch {
      alert('Failed to summarize journal entry');
    } finally {
      setSummarizing(false);
    }
  };

  if (!entry) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{ background: '#fff', padding: '2rem', borderRadius: '10px', minWidth: '350px', maxWidth: '90vw', maxHeight: '80vh', overflowY: 'auto' }}>
        <h2>{entry.title}</h2>
        <div style={{ margin: '1rem 0' }}><strong>Entry:</strong><br />{entry.content}</div>
        {summary && <div style={{ margin: '1rem 0', color: '#555' }}><strong>Summary:</strong><br />{summary}</div>}
        <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1rem' }}>{entry.createdAt ? new Date(entry.createdAt).toLocaleString() : ''}</div>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={{ background: '#4f8cff', color: '#fff', fontWeight: 600, border: 'none', borderRadius: 5, padding: '0.5rem 1.2rem', fontSize: '1rem', cursor: 'pointer' }}>Close</button>
          <button onClick={handleSummarize} style={{ background: '#ffb300', color: '#222', fontWeight: 600, border: 'none', borderRadius: 5, padding: '0.5rem 1.2rem', fontSize: '1rem', cursor: 'pointer' }} disabled={summarizing}>
            {summarizing ? 'Summarizing...' : 'Summarize'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalModal;
