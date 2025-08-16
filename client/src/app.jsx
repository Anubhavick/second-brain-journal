import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import NewEntry from './pages/newEntry';
import JournalModal from './components/JournalModal';
import EditJournalModal from './components/EditJournalModal';
import JournalMenu from './components/JournalMenu';
import journalService from './services/journalService';

// Centralized route configuration for scalability
const routes = [
  { path: '/', element: <Home /> },
  { path: '/new', element: <NewEntry /> },
];

// Demo Banner Component
const DemoBanner = () => {
  const isDemoMode = !import.meta.env.VITE_API_URL?.includes('localhost') && 
                    !import.meta.env.VITE_API_URL?.includes('your-backend-url');
  
  if (!isDemoMode && import.meta.env.MODE === 'development') return null;

  return (
    <div className="bg-blue-600 text-white text-center py-2 px-4 text-sm">
      🚀 <strong>Demo Mode</strong> - This is a demonstration version. Data is stored locally and AI features use mock responses.
    </div>
  );
};

function App() {
  return (
    <Router>
      <DemoBanner />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
