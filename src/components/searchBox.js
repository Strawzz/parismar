
import React, { useState} from 'react';
import '../styles/homePage.css';
import {getAllMarkets, searchMarket, searchByName} from './CallAPI';
import {useNavigate} from 'react-router-dom';


const SearchBox = ({searchOption, searchValue, setSearchOption, setSearchValue,handdleSearchOptionChange, handleSearchInputChange, handleUpdateMarkets}) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    

    const handleSelectOption = (option) => {
        setSearchOption(option);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    
    const navigate = useNavigate();

    const handleSearchButtonClick = async() => {
    
        let searchData;
        if(searchOption.trim() === '' || searchOption === 'All Market'){
            searchData = await getAllMarkets(handleUpdateMarkets);
        }
        else if(searchOption.trim() === 'Market Name' && searchValue != null){
           
            searchData = await searchByName(searchValue);
        }
        else{
            searchData = await searchMarket(searchOption, searchValue, handleUpdateMarkets);
        }

        navigate(`/search-results/${encodeURIComponent(searchValue)}`, {state: {searchData}});
    };



    return (
        <div className="container">
            <div className="search-bar">
                <div id="select" onClick={toggleDropdown}>
                    <p id="selectText">{searchOption === ''? 'All Markets':searchOption}</p>
                    <span>▼</span>
                    <ul id="list" className={isDropdownOpen ? 'open' : ''}>
                        <li className="options" onClick={() => handleSelectOption('All Markets')}>All Markets</li>
                        <li className="options" onClick={() => handleSelectOption('Market Name')}>Market Name</li>
                        <li className="options" onClick={() => handleSelectOption('Day')}>Day</li>
                        <li className="options" onClick={() => handleSelectOption('Arrondissement')}>Arrondissement</li>
                        <li className="options" onClick={() => handleSelectOption('Category')}>Category</li>
                    </ul>
                    
                </div>
                    <input
                    type="text"
                    id="inputfield"
                    placeholder={
                        searchOption === 'Category'
                        ? 'Food, Organic, Flowers, Birds, Stamps, Flea Market, Second-Hand, Art'
                        : (searchOption === 'Arrondissement' ? '1 - 20' : `Search In ${searchOption}`)
                    }
                    onChange={handleSearchInputChange}
                    />
                </div>
            <button className = "search-button"  onClick={handleSearchButtonClick}>
                <img src={require('../styles/searchIcon.png')} alt="Search Icon" /></button>
        </div>
    );
};

export default SearchBox;
