import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import aboutImage from '../styles/aboutImage.jpeg';
import searchIcon from '../styles/searchIcon.png';

  
const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}
const slideImages = [
    {
        url: aboutImage,
        caption: 'Slide 1'
    },
    {
        url: searchIcon,
        caption: 'Slide 2'
    },
    
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide duration={1400}>
            {slideImages.map((slideImage, index)=> (
                <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                    <span style={spanStyle}>{slideImage.caption}</span>
                </div>
                </div>
            ))} 
            </Slide>
        </div>
    )
}
export default Slideshow;