import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import NewEntry from './pages/newEntry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewEntry />} />
      </Routes>
    </Router>
  );
}

export default App;
