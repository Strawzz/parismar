
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from './Header';
import '../styles/searchResultPage.css';


const SearchResultPage = () => {
  const location = useLocation();
  const { searchData } = location.state || {};

  return (
    <div>
      <div className="searchResult-container">
        <Header />
        {searchData && (
          <div>
            <h2>Search Results</h2>
            {/* <pre>{JSON.stringify(searchData, null, 2)}</pre> */}
            {searchData.map((market) => (
                  <div key={market.name}>
                    <Link to={`/market/${encodeURIComponent(market.name)}`}>
                      <h3>{market.name}</h3>
                    </Link>
                  </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultPage;


