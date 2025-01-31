import { Link } from 'react-router-dom';
import { useState , useEffect , useRef } from 'react';
import img1 from'./img/Nike-Blueprint1.jpg'
import img2 from'./img/Nike-Blueprint2.jpg'
import img3 from'./img/Nike-Blueprint3.jpg'
import img4 from'./img/nike-blueprint4.jpg'
import img5 from'./img/nike-blueprint5.jpg'
import img6 from'./img/nike-blueprint6.jpg'
import img7 from'./img/nike-blueprint7.jpg'
import './item.css'


function SliderItem(){
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
              <div className='items2'>
              <h1>Our New Collection</h1>
              <div className='btn2'>
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
             <Link to="/newCollection"> <button className="product-label">{product.name}</button></Link>
            </div>
          ))}
          </div>
          </div>
  
  
      )
}


export default SliderItem