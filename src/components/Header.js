
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'

const Header = ({showLoginLink, showAboutLink}) => {
    return (
            <div className="header-content">
                <div className='h1'>
                    <Link to="/">MARKETS of Paris</Link>
                </div>
                {showAboutLink && (
                    <div className='h2'>
                        <Link to="/about">About</Link>
                    </div>
                )}
                {showLoginLink && (
                    <div className='h3'>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Log in</Link>
                    </div>
                )}
            </div>
    );
};

export default Header;