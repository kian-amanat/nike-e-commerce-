import React from 'react';
import { useState , useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css'



const Slider1 = ({images}) =>{

const [currentIndex , setCurrentIndex] = useState(0)

useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

  };


  const handlePrev = () => {
    let res = 3 % 3
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
console.log(res)
  };

  return (
    <div className="slider">
    <button className="prev-btn" onClick={handlePrev}>
      &#10094; 
    </button>
    <div className="slider-wrapper">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="slider-image"
      />
    </div>
    <button className="next-btn" onClick={handleNext}>
      &#10095; 
    </button>
  </div>
  );
}

export default Slider1;