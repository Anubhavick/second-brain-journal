import React, { useState, useEffect } from 'react';

const EditJournalModal = ({ entry, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (entry) {
      setTitle(entry.title || '');
      setContent(entry.content || '');
      setTags(entry.tags ? entry.tags.join(', ') : '');
    }
  }, [entry]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await onSave({
      title,
      content,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
    });
    setSaving(false);
  };

  if (!entry) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{ background: '#fff', padding: '2rem', borderRadius: '10px', minWidth: '350px', maxWidth: '90vw', maxHeight: '80vh', overflowY: 'auto' }}>
        <h2>Edit Journal</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
            style={{ width: '100%', marginBottom: '1rem', fontSize: '1.1rem', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          />
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            rows={10}
            cols={50}
            placeholder="Write your thoughts here..."
            required
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <input
            type="text"
            value={tags}
            onChange={e => setTags(e.target.value)}
            placeholder="Tags (comma separated)"
            style={{ width: '100%', marginBottom: '1rem', fontSize: '1rem', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button type="submit" disabled={saving}>{saving ? 'Saving...' : 'Save'}</button>
            <button type="button" onClick={onClose} style={{ background: '#eee', color: '#222' }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJournalModal;
