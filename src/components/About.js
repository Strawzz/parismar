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
                    <p className="about-paragraph">The tradition of open air market that dates back to the Middle Ages and endures as a fixture of the modern city. However, its format and function have evolved over time. Once the financial hub of the city, facilitating trade in dry goods, money lending, textiles, and dyes, it has since become more associated with individual farmers, artisanal merchants, ethnic migrants, and second-hand vendors. The peak of the market's importance in the Parisian economy was unquestionably the construction of Les Halles, a vast network of glass pavilions near the city center intended to streamline commerce and trade. Nonetheless, by the 1970s, such structures had fallen out of fashion as more people began to prefer larger shopping centers. This shift is evident in the demolition of Les Halles in favor of an underground mall, a transition that occurred as the Parisian economy became increasingly financialized in the wake of the Second World War. </p>
                </div>
                <div className='about-p3'>
                    <p className="about-paragraph">Nonetheless, the significance of open-air markets remain. They are scheduled on different days of the week in each arrondissement, offering city residents a glimpse of an earlier era before the advent of global supply chains. However, they are not confined to the past; Parisians of all ethnic backgrounds participate. Amidst the presence of traditional farmers and artisans, there are also new migrants driven by French colonialism from regions such as the Maghreb, Sub-Saharan Africa, China, and Vietnam. As a result, one can find stands selling fine wines, seasonal breads, and sausages alongside those offering Algerian dates, Asian vegetables, bubble teas, banh mi sandwiches, and more. In this way, the market functions as a site of cultural convergence that pays homage to its medieval history while reflecting the city’s contemporary position as a global metropolis. </p>
                </div>
                <div className='about-p4'>
                    <p className="about-paragraph">For those visiting Paris, experiencing the market is just as necessary as visting Le Louvre or strolling along Les Champs-Elysées. However, it is difficult to know when they take place, what they sell, and where they're located. While second nature to local residents, tourists often struggle to access such information relying solely on Yelp, Google Maps, and the like. Now with Markets of Paris, just input your Arrondissement along with preferred days and times to discover the markets near you. Don't hesitate to enjoy this centuries old tradition and live like a true Parisian. </p>
                </div>
            
            </div>
        </div>
    );

};
export default About;