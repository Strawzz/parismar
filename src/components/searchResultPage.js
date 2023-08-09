
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllMarkets, searchMarket } from './CallAPI';

const SearchResultPage = () => {
  const { searchQuery } = useParams();
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    async function fetchSearchResults() {
      let results = [];

      if (searchQuery === 'all-markets' || !searchQuery) {
        results = await getAllMarkets();
      } else {
        // You can modify this logic based on your search parameters
        results = await searchMarket(/* your search parameters */);
      }

      setSearchResults(results);
    }

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div>
      <h2>Search Results</h2>
      <pre>{JSON.stringify(searchResults, null, 2)}</pre>
      {/* {searchResults.map((result) => (
        <div key={result.id}>
          <p>Name: {result.name}</p>
          <p>Category: {result.category}</p>
          <p>Paris Quarter: {result.parisQuarter}</p>
        </div>
      ))} */}
    </div>
  );
};

export default SearchResultPage;
