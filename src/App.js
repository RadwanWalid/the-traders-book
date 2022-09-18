import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Home from './Views/Home';
import MarketAnalysis from "./Views/MarketAnalysis";

function App() {
  return (
    <div>
      <Sidebar />
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/MarketAnalysis" element={<MarketAnalysis />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
