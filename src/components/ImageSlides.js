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
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'contain',
    height: '400px',
    maxWidth: '100%', 
    maxHeight: '100%', 

}
const slideImages = [
    {
        url: aboutImage,
        caption: 'Slide 1'
    },
    {
        url:show1 ,
        caption: 'Slide 2'
    },
    {
        url:show2 ,
        caption: 'Slide 2'
    },
    {
        url:show3 ,
        caption: 'Slide 2'
    },
    {
        url:show4 ,
        caption: 'Slide 2'
    },
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide duration={1000}>
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