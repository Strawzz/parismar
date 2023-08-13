import React from 'react';
import Header from './Header';
import '../styles/about.css';
import Slideshow from './ImageSlides';


const About = () => {
    

    return (
        <div>
            <div className="about-container">
                <div className="about-header">
                    <Header showLoginLink={true} />
                </div>

                <div className='about-p1'>
                    <p className="about-paragraph">Open air markets are a central aspect of Parisian daily life. Selling everything from produce to cured meats, antiques, vintage clothing, and more, ”le marché” is as important as the Eiffel Tower in forming the city's fabric. Each quarter has it's own markets, which take place at a specific date and time. Farmers and artisans set up shop for a few hours as the locals peruse the stands, buy their weekly groceries, and search for a few diamonds in the rough. As old as Paris itself, this routine remains a fixture of the modern city, while allowing Parisians to remain in contact with their cultural heritage. </p>
                </div>

                <div className="slideshow-section">
                    <Slideshow />
                </div>
                
                <div className='about-p2'>
                    <p className="about-paragraph">For those visiting Paris, experiencing the market is just as necessary as visting Le Louvre or strolling along Les Champs-Elysées. However, it is difficult to know when they take place, what they sell, and where they're located. While second nature to local residents, tourists often struggle to access such information relying solely on Yelp, Google Maps, and the like. Now with Markets of Paris, just input your Arrondissement along with preferred days and times to discover the markets near you. Don't hesitate to enjoy this centuries old tradition and live like a true Parisian. </p>
                </div>
            
            </div>
        </div>
    );

};
export default About;