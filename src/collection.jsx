import React from 'react';
import { Link } from 'react-router-dom';
import { useState , useEffect , useRef } from 'react';
import DropDown from "./dropdown.jsx";
import nike from "./img/nike.png";
import data from './data.js'
import Footer from "./footer.jsx";
import './blue.css';
import img1 from'./img/Nike-Blueprint1.jpg'
import img2 from'./img/Nike-Blueprint2.jpg'
import img3 from'./img/Nike-Blueprint3.jpg'
import img4 from'./img/nike-blueprint4.jpg'
import img5 from'./img/nike-blueprint5.jpg'
import img6 from'./img/nike-blueprint6.jpg'
import img7 from'./img/nike-blueprint7.jpg'



export default function Collection(){
    const [isDisabled, setIsDisabled] = useState(true);
    const [pick, setPick] = useState(false);
    const [active, setActive] = useState(true);
    const [selectedSize, setSelectedSize] = useState(null); // State for storing selected size
    const searchRef = useRef(null);
    const category = useRef(null);
    let [count, setCount] = useState(0);
    const headerRef = useRef(null);

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

    return(
        
        <>
        <header className={active ? "header-bar2" : "header-bar"} ref={headerRef}>
            <div className="logo">
                <Link to={'/'}><img src={nike} alt="nike logo"/></Link>
            </div>
            <DropDown active={active} setActive={setActive} />
            <section className="container search-filter">
                <div className="row">
                    <div className="col-md-3 position-relative">
                        <input
                            type="text"
                            ref={searchRef}
                            className="form-control search-input"
                            placeholder="      Search..."
                        />
                        <i className="fas fa-search search-icon"></i>
                    </div>
                </div>
            </section>
            <div className="cart-info">
                <div>
                    <a href="/payment">
                        <i className="fas fa-shopping-bag bag-icon"></i>{" "}
                    </a>
                    {count}
                </div>
            </div>
        </header>
        <div className='bg-blue'>
            <h1 className='title-page'>Nike Blueprint</h1>
        </div>

        <h2 className='title-page2'>See our New Collection</h2>
        <section className="collection-container">
  {products.map((product, index) => {
    return (
      <Link to={`/product/${index}`} key={index}>
        <div className="collection">
          <img className="img-card" src={product.image} alt={product.name} />
        </div>
      </Link>
    );
  })}
</section>
<Footer/>
        </>
    )
}
