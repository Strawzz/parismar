import React from 'react';
import Header from './Header';
import '../styles/about.css';
import Slideshow from './ImageSlides';


const About = () => {
    

    return (
        <div>
            <div className="about-container">
                <Header showLoginLink={true}/>
                <div className='about-title'>About</div>
                <Slideshow /> 
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