
// import React, { useState } from 'react';
// import axios from 'axios';


// const App = () => {
//   const [searchOption, setSearchOption] = useState('category');
//   const [searchValue, setSearchValue] = useState('');
//   const [markets, setMarkets] = useState([]);

//   const handleSearchOptionChange = (event) => {
//     setSearchOption(event.target.value);
//   };

//   const handleSearchInputChange = (event) => {
//     setSearchValue(event.target.value);
//   };

//   const handleSearchSubmit = async () => {
//     try {
//       if (searchOption === 'name') {
//         // If the option is "name", make the API request directly with the name in the URL
//         const response = await axios.get(`http://localhost:8080/api/markets/${encodeURIComponent(searchValue)}`);
//         const marketData = response.data;
//         setMarkets([marketData]);
//       } else {
//         // For other search options, make the API request with parameters to get the markets
//         let encodedValue = searchValue;
//         if (searchOption === 'name') {
//           // Encode the search value if the option is "name"
//           encodedValue = encodeURIComponent(searchValue);
//         }

//         const response = await axios.get(`http://localhost:8080/api/markets/all`, {
//           params: {
//             [searchOption]: encodedValue,
//           },
//         });

//         const marketsData = response.data;
//         setMarkets(marketsData);
//       }
//     } catch (error) {
//       console.error('Error fetching markets:', error.message);
//     }
//   };

//   return (
//     <div id="header">
//       <header id="h1">
//         <h1>Market of Paris</h1>
//       </header>
//       <div id="search-container">
//         <div id="search-options">
//           <label>
//             <input
//               type="radio"
//               value="category"
//               checked={searchOption === 'category'}
//               onChange={handleSearchOptionChange}
//             />
//             Search by Category
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="name"
//               checked={searchOption === 'name'}
//               onChange={handleSearchOptionChange}
//             />
//             Search by Name
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="quarterId"
//               checked={searchOption === 'quarterId'}
//               onChange={handleSearchOptionChange}
//             />
//             Search by Paris City Quarter
//           </label>
//         </div>
//         <div id="search-input">
//           <input
//             type="text"
//             placeholder={`Enter ${searchOption === 'quarterId' ? 'Quarter' : 'Search'}...`}
//             value={searchValue}
//             onChange={handleSearchInputChange}
//           />
//           <button onClick={handleSearchSubmit}>Search</button>
//         </div>
//       </div>
//       <div>
//         {markets.map((market) => (
//           <div key={market.id}>
//             <p>Name: {market.name}</p>
//             <p>Category: {market.category}</p>
//             <p>Paris Quarter: {market.parisQuarter}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;


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
            <Route path="/search-results/" element={<SearchResultPage />} />
          </Routes>
        </Router>
  );
};

export default App;

