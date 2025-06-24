import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import journalService from '../services/journalService';
import JournalModal from '../components/JournalModal';
import EditJournalModal from '../components/EditJournalModal';
import JournalMenu from '../components/JournalMenu';

const Home = () => {
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [modalEntry, setModalEntry] = useState(null);
  const [editEntry, setEditEntry] = useState(null);
  const [menuOpenId, setMenuOpenId] = useState(null);

  // Fetch all journals
  const fetchJournals = async () => {
    try {
      const data = await journalService.getAllJournals();
      setJournals(data);
    } catch (err) {
      setError('Failed to load journal entries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  // Delete a journal entry
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this journal entry?')) return;
    setDeletingId(id);
    try {
      await journalService.deleteJournal(id);
      setJournals(journals.filter((j) => j._id !== id));
    } catch (err) {
      alert('Failed to delete journal entry');
    } finally {
      setDeletingId(null);
      setMenuOpenId(null);
    }
  };

  // Save edits to a journal entry
  const handleEditSave = async (updated) => {
    try {
      const res = await journalService.updateJournal(editEntry._id, updated);
      setJournals(journals.map((j) => (j._id === editEntry._id ? res : j)));
      setEditEntry(null);
    } catch (err) {
      alert('Failed to update journal entry');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📓 My Journal Entries</h1>
      <Link to="/new">
        <button>Add New Entry</button>
      </Link>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && journals.length === 0 && <p>No journal entries found.</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {journals.map((entry) => (
          <li
            key={entry._id}
            style={{
              marginBottom: '2rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              position: 'relative',
              cursor: 'pointer',
              background: '#fff',
            }}
            onClick={(e) => {
              if (e.target.closest('.journal-menu-btn')) return;
              setModalEntry(entry);
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{entry.title}</div>
                {entry.tags && entry.tags.length > 0 && (
                  <div style={{ margin: '0.3rem 0', color: '#0070f3', fontSize: '0.95rem' }}>
                    {entry.tags.join(', ')}
                  </div>
                )}
              </div>
              <button
                className="journal-menu-btn"
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  padding: '0 0.5rem',
                  color: '#888',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuOpenId(menuOpenId === entry._id ? null : entry._id);
                }}
                aria-label="Show options"
              >
                &#8942;
              </button>
              {menuOpenId === entry._id && (
                <JournalMenu
                  onEdit={() => {
                    setEditEntry(entry);
                    setMenuOpenId(null);
                  }}
                  onDelete={() => handleDelete(entry._id)}
                  loading={deletingId === entry._id}
                  onClose={() => setMenuOpenId(null)}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
      <JournalModal entry={modalEntry} onClose={() => setModalEntry(null)} />
      <EditJournalModal entry={editEntry} onClose={() => setEditEntry(null)} onSave={handleEditSave} />
    </div>
  );
};

export default Home;
