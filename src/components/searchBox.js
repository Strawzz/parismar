
import React, { useState } from 'react';
import '../styles/App.css';
import {getAllMarkets, searchMarket} from '../App';



const SearchBox = ({searchOption, searchValue, handdleSearchOptionChange, handleSearchInputChange, handleUpdateMarkets, setSearchOption}) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSelectOption = (option) => {
        setSearchOption(option);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSearchButtonClick = async() => {
        if(searchOption.trim() === ''){
            await getAllMarkets(handleUpdateMarkets);
        }
        else{
            await searchMarket(searchOption, searchValue, handleUpdateMarkets);
        }
    };

    return (
        <div className="container">
            <div className="search-bar">
                <div id="select" onClick={toggleDropdown}>
                    <p id="selectText">{searchOption === ''? 'All markets':searchOption}</p>
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
                placeholder={`Search In ${searchOption}`}
            />
            </div>
            <button className = "search-button"  onClick={handleSearchButtonClick}>
                <img src={require('../styles/searchIcon.png')} alt="Search Icon" /></button>
        </div>
    );
};

export default SearchBox;
