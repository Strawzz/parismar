import React from 'react';
import Header from './Header';
import '../styles/about.css';

const About = () => {
    return (
        <div>
            <div className="about-container">
                <Header />
                <img
                    src={require('../styles/aboutImage.jpeg')} 
                    alt="About"
                    className="about-image"
                />
                <h2 className="about-title">About Markets in Paris</h2>
                <p className="about-paragraph">
                    我累死了！！！！！
                </p>
                <p className="about-paragraph">
                    努力！
                </p>
            </div>
        </div>
    );
};
export default About;