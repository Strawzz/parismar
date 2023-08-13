import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import aboutImage from '../styles/aboutImage.jpeg';
import show1 from '../styles/show1.jpeg';
import show2 from '../styles/show2.jpeg';
import show3 from '../styles/show3.jpeg';
import show4 from '../styles/show4.jpeg';

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
    maxWidth: '800px', // Adjust the container width as needed
    margin: '0 auto', // Center the container horizontally
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '600px',
    width: '100%',
    position: 'relative', // Ensure relative positioning for the caption
}

const slideImages = [
    {
        url: show1,
        caption: 'Slide 1'
    },
    {
        url: show2,
        caption: 'Slide 2'
    },
    {
        url: show3,
        caption: 'Slide 3'
    },
    {
        url: show4,
        caption: 'Slide 4'
    },
];

const Slideshow = () => {
    return (
        <div className="slide-container" style={containerStyle}>
            <Slide duration={1000}>
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
