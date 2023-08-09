import React, { useState } from 'react';
import {getAllMarkets, searchMarket} from './CallAPI';
import SearchBox from './SearchBox';
import { Link } from 'react-router-dom';
import '../styles/homePage.css'
export const HomePage = ()=>{
  const [searchOption, setSearchOption] = useState('All Markets');
  const [searchValue, setSearchValue] = useState('');
  const [markets, setMarkets] = useState([]);

  const handleSearchOptionChange = (event) => {
    setSearchOption(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleUpdateMarkets = (newMarkets) => {
    setMarkets(newMarkets);
  }
  return (
    
      <div id="header">
        <div className="header-content">
            <div className='h1'>
              <Link to="/">MARKETS of Paris</Link>
            </div>
            <div className='h2'>
                <Link to="/about">About</Link>
            </div>
            <div className='h3'>
              <Link to="/register">Register</Link>
              <Link to="/login">Log in</Link>
            </div>
        </div>
        <SearchBox
          searchOption={searchOption}
          searchValue={searchValue}
          setSearchOption={setSearchOption}
          setSearchValue={setSearchValue}
          handleSearchOptionChange={handleSearchOptionChange}
          handleSearchInputChange={handleSearchInputChange}
          handleUpdateMarkets={handleUpdateMarkets}
          getAllMarkets={getAllMarkets}
          searchMarket={searchMarket}
        />
        <div>
          {markets.map((market) => (
            <div key={market.id}>
              <p>Name: {market.name}</p>
              <p>Category: {market.category}</p>
              <p>Paris Quarter: {market.parisQuarter}</p>
            </div>
          ))}
        </div>
      </div>
    );
};
export default HomePage;
