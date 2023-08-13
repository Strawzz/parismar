import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import aboutImage from '../styles/aboutImage.jpeg';
import show1 from '../styles/show1.jpeg';
import show2 from '../styles/show2.jpeg';
import show4 from '../styles/show4.jpeg';
import show5 from '../styles/show5.jpeg';
import show6 from '../styles/show6.jpeg';
import show7 from '../styles/show7.jpeg';

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000',
    position: 'absolute', // Position the caption absolutely within the slide's div
    bottom: '0', // Place the caption at the bottom of the div
    width: '100%', // Make the caption span the full width of the div
    boxSizing: 'border-box', // Include padding in the full width
}

const containerStyle = {
    position: 'relative', // Position the container to handle child positioning
    maxWidth: '1200px', // Adjust the container width as needed
    margin: '0 auto', // Center the container horizontally
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '700px',
    width: '85%',
    position: 'relative', // Ensure relative positioning for the caption
}

const slideImages = [
    {
        url: show1,
        caption: 'Interior view of Les Halles showing the immensity of the glass pavilion’s structure. '
    },
    {
        url: show4,
        caption: 'Women selling escargot in the Les Halles. '
    },
    {
        url: show5,
        caption: 'Merchants setting up their stands for the day, early 1900s. '
    },

    {
        url: show6,
        caption: 'Another covered market, Marché des Patriarches, popularized during the 1800s. Like Les Halles, it was demolished after WW2.  '
    },
    {
        url: show2,
        caption: '"Un marché de puces,” or flea market set up outside Les Halles in the late 1800s. '
    },
    {
        url: show7,
        caption: 'An open-air farmers market circa 1900.'
    },

];

const Slideshow = () => {
    return (
        <div className="slide-container" style={containerStyle}>
            <Slide duration={3000}>
                {slideImages.map((slideImage, index) => (
                    <div key={index} style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
                        <span style={spanStyle}>{slideImage.caption}</span>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slideshow;
