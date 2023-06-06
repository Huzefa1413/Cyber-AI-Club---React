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
import Joinuspage from './Pages/Joinuspage';
import AdminLoginpage from './Pages/AdminLoginpage';
import AdminHomepage from './Pages/AdminHomepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<Eventspage />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/joinus" element={<Joinuspage />} />
        <Route path="/admin" element={<AdminLoginpage />} />
        <Route path="/admin/home" element={<AdminHomepage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
