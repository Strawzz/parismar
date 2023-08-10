
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResultPage from './components/SearchResultPage';
import About from './components/About';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MarketPage from './components/MarketPage';
import './styles/homePage.css';


const App = () => {

  // }
  
  return (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/search-results/:searchValu?" element={<SearchResultPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/market/:marketName" element={<MarketPage />} />
          </Routes>
        </Router>
  );
};

export default App;

