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

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
