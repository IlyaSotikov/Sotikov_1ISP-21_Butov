import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from '/components/MainContent';
import reviews from '/components/reviews';
import service from '/components/service';
import gal from '/components/gal';
import lk from '/components/lk';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/reviews" element={<reviews />} />
        <Route path="/service" element={<service />} />
        <Route path="/gal" element={<gal />} />
        <Route path="/lk" element={<lk />} />
      </Routes>
    </Router>
  );
};

export default App;
