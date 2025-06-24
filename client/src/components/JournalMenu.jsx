import React, { useRef, useEffect } from 'react';

const JournalMenu = ({ onEdit, onDelete, loading, onClose }) => {
  const menuRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) onClose();
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      style={{
        position: 'absolute',
        right: 10,
        top: 35,
        background: '#fff',
        border: '1px solid #ccc',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        zIndex: 10,
        minWidth: 120,
      }}
    >
      <button
        style={{
          display: 'block',
          width: '100%',
          padding: '0.7rem 1.5rem',
          border: 'none',
          background: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          fontWeight: 600,
          color: '#222',
          fontSize: '1rem',
        }}
        onClick={onEdit}
      >
        Edit
      </button>
      <button
        style={{
          display: 'block',
          width: '100%',
          padding: '0.7rem 1.5rem',
          border: 'none',
          background: 'none',
          textAlign: 'left',
          color: '#ff4d4f',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '1rem',
        }}
        onClick={onDelete}
        disabled={loading}
      >
        Delete
      </button>
    </div>
  );
};

export default JournalMenu;
