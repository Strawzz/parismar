import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from './Header';
import '../styles/searchResultPage.css';
import les_Halles1 from '../styles/les_Halles1.jpeg';
import les_Halles2 from '../styles/les_Halles2.jpg';
import les_Halles3 from '../styles/les_Halles3.jpeg';
import les_Halles4 from '../styles/les_Halles4.jpeg';


const SearchResultPage = () => {
  const location = useLocation();
  const { searchData } = location.state || {};

  return (
    <div className='searchRP-container'>
          <div className='side-container'></div>
          <div className='searchR-header'>
              <Header showAboutLink={true} showLoginLink={true}/>
          </div>
      <div className="content-container">
            <div className="content-section">
                <div className="searchResult-container">
                  <div className="Result-section">
                    <h2>Search Results</h2>
                      {searchData ? (Array.isArray(searchData) ? (
                        searchData.length > 0 ? (
                          searchData.map((market) => (
                            <div key={market.name}>
                              <Link to={`/market/${encodeURIComponent(market.name)}`}>
                                <h3>{market.name}</h3>
                              </Link>
                            </div>
                          ))
                        ) : (
                          <p>No results found.</p>
                        )
                      ) : (
                        // Render the single market when searchData is not an array
                        <div key={searchData.name}>
                          <Link to={`/market/${encodeURIComponent(searchData.name)}`}>
                            <h3>{searchData.name}</h3>
                          </Link>
                        </div>
                          )
                    ) : (
                        <p>No search data available.</p>
                      )}
                  </div>
                </div>
                <div className="images-section">
                  <div className='title'>
                      <p1>Les Halles -- The Lost Market</p1>
                  </div>
                  <div className="frame1" id='image1'>
                    <img src={les_Halles3} alt="Image 1" />
                  </div >
                  <div className="paragraph1">
                      <p2>Les Halles was Paris's central market from the middle ages to the twentieth century. For centuries it was the place to buy produce, meats, dry goods, textiles, etc., serving as the city's main business hub. </p2>
                  </div>

                  <div className="frame2" id='image2'>
                    <img src={les_Halles2} alt="Image 2" />
                  </div>

                  <div className='paragraph2'>
                      <p3>By the mid-1800s Les Halles featured an immense network of glass pavilions to accommodate the city's plethora of food stands and artisanal merchants -- with Émile Zola famously calling it "le ventre," or "the belly of Paris."</p3>
                  </div>

                  <div className="frame3" id='image3'>
                    <img src={les_Halles1} alt="Image 3" />
                  </div>

                  <div className='paragraph3'>
                      <p4>However, in the 1970s its purpose had become out-moded, with most merchants having moved on to burgeoning super markets such as Casino and Carrefour. It was then demolished and made into an undergound mall and transit station.  </p4>
                  </div>
                  <div className="frame4" id='image4'>
                    <img src={les_Halles4} alt="Image 4" />
                  </div>
                  <div className='paragraph4'>
                      <p5>Nevertheless, the memory of "Les Halles" lives on in the numerous open air markets, which conintue to give life to Paris's twenty Arrondisements.</p5>
                  </div>
                </div>
            </div>

      </div>
    </div>
  );
};

export default SearchResultPage;


