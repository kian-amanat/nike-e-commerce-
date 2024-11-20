import './move.css'
import React from 'react';

import { useState , useEffect , useRef } from 'react';
import img1 from'./img/move1.png'
import img2 from'./img/merc1.png'
import img3 from './img/air1.png'
import img4 from './img/dunk.png'
import img5 from './img/run.png'
import img6 from './img/jor1.jpeg'
import img7 from './img/run3.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function SliderMove(){
    const sliderRef = useRef(null);
    const products = [
        {
          name: "Air Max",
          image: img1, 
        },
        {
          name: "Air Force 1",
          image: img3,
        },
        {
          name: "Dunk",
          image: img4,
        },
        {
            name: "Y2K",
            image: img5,
          },
          {
            name: "Air Jordan",
            image: img6,
          },
          {
            name: "Pegasus",
            image: img7,
          },
          {
            name: "Mercurial",
            image: img2,
          },
      ];


      function leftScroll(){
        if(sliderRef.current){
            sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' })
        }
      }

      function rightScroll(){
        if(sliderRef.current){
            sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' })
        }
      }
    return(
        <div>
            <div className='items'>
            <h1>Shop Our Icons</h1>
            <div className='btn'>
            <button className="prev-btn-move" onClick={leftScroll}>
            &#10094;
    </button>
    <button className="next-btn-move" onClick={rightScroll}>
    &#10095;  
    </button>

            </div>
            </div>
            
        <div className='images' ref={sliderRef}>
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="slider-image2" />
            <button className="product-label">{product.name}</button>
          </div>
        ))}
        </div>
        </div>


    )
}

export default SliderMove