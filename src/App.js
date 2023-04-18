import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import Eventspage from './Pages/Eventspage';
import Teampage from './Pages/Teampage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<Eventspage />} />
        <Route path="/team" element={<Teampage />} />
      </Routes>
    </Router>
  );
};

export default App;
