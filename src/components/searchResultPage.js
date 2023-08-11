
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
    <div>
          <div className='side-container'></div>

      <div className="content-container">
          <div className='header'>
              <Header showAboutLink={true} showLoginLink={true}/>
          </div>
            <div className="content-section">
                <div className="searchResult-container">
                  {searchData && (
                    <div className="Result-section">
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
                <div className="images-section">
                  <div className="frame" id='image1'>
                    <img src={les_Halles3} alt="Image 1" />
                  </div >
                  <div className="frame" id='image2'>
                    <img src={les_Halles2} alt="Image 2" />
                  </div>
                  <div className="frame" id='image3'>
                    <img src={les_Halles1} alt="Image 3" />
                  </div>
                  <div className="frame" id='image4'>
                    <img src={les_Halles4} alt="Image 4" />
                  </div>
                </div>
            </div>

      </div>
    </div>
  );
};

export default SearchResultPage;


