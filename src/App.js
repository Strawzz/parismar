
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResultPage from './components/SearchResultPage';
import About from './components/About';
import HomePage from './components/HomePage';
import './styles/homePage.css';

const App = () => {

  // }
  
  return (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/search-results/:searchValue" element={<SearchResultPage />} />
          </Routes>
        </Router>
  );
};

export default App;

