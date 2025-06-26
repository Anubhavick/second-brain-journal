import React, { useState, useRef } from 'react';
import journalService from '../services/journalService';
import { useNavigate } from 'react-router-dom';

const NewEntry = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [recording, setRecording] = useState(false);
  const recognitionRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tagsArray = tags.split(',').map((t) => t.trim()).filter(Boolean);
      await journalService.createJournal({ title, content, tags: tagsArray });
      navigate('/');
    } catch (error) {
      alert('Error saving journal entry');
    }
  };

  const handleMicClick = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Speech Recognition is not supported in this browser.');
      return;
    }
    if (recording) {
      recognitionRef.current.stop();
      setRecording(false);
    } else {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
        setContent((prev) => {
          // Remove any previous interim transcript
          const prevWithoutInterim = prev.replace(/\[Interim:.*\]$/, '');
          return prevWithoutInterim + finalTranscript + (interimTranscript ? `[Interim:${interimTranscript}]` : '');
        });
      };
      recognition.onend = () => {
        setRecording(false);
        setContent((prev) => prev.replace(/\[Interim:.*\]$/, ''));
      };
      recognition.onerror = (e) => {
        setRecording(false);
        setContent((prev) => prev.replace(/\[Interim:.*\]$/, ''));
        alert('Speech recognition error: ' + e.error);
      };
      recognition.start();
      setRecording(true);
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
          style={{
            width: '100%',
            marginBottom: '1rem',
            fontSize: '1.1rem',
            padding: '0.5rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
          required
        />
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <textarea
            value={content.replace(/\[Interim:.*\]$/, '')}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            cols={50}
            placeholder="Write your thoughts here..."
            required
            style={{ width: '100%', marginBottom: 0 }}
          />
          <button
            type="button"
            onClick={handleMicClick}
            style={{
              position: 'absolute',
              right: 10,
              bottom: 10,
              background: recording ? '#ff5252' : '#1976d2',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: 40,
              height: 40,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              zIndex: 2,
            }}
            title={recording ? 'Stop Recording' : 'Start Recording'}
          >
            {recording ? '■' : '🎤'}
          </button>
        </div>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma separated, e.g. work, personal, idea)"
          style={{
            width: '100%',
            margin: '1rem 0',
            fontSize: '1rem',
            padding: '0.5rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <button type="submit">Save Entry</button>
      </form>
    </div>
  );
};

export default NewEntry;
