import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Homepage from './Pages/Homepage';
import Eventspage from './Pages/Eventspage';
import Teampage from './Pages/Teampage';
import JoinUspage from './Pages/JoinUspage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<Eventspage />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/joinusform" element={<JoinUspage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
