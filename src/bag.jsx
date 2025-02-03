import React from 'react';
import { useState , useEffect , useRef } from 'react';
import products from './data.js';
import DropDown from './dropdown.jsx';
import { useParams } from "react-router-dom";
import nike from './img/nike.png'
import './bag.css'
import { useLocation } from 'react-router-dom';
import QuantityButton from './quanty.jsx';
import SliderMove from './move.jsx';
import Footer from './footer.jsx'




function Payment(){
  const [count , setCount] = useState(1)
  const { index } = useParams(); 
  const product = products[parseInt(index)];
  const [active , setActive] = useState(true)
  const searchRef = useRef(null);
  const headerRef = useRef(null);

  const location = useLocation();
  const selectedSize = location.state?.selectedSize;

  const fetchProductById = async (productId) => {
    const url = `http://localhost:3000/products/${productId}`;
  
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Product Data:", data);
    } catch (error) {
      console.error("Error fetching product:", error.message);
    }
  };
  


  

function payment(){
  fetchProductById(index);
}


    return(
        <>
         <header className={active ? "header-bar2" : "header-bar"} ref={headerRef}>
       <div className="logo">
           <img src={nike} alt="nike logo" />
         </div>
         <DropDown active={active} setActive={setActive} />
         <section className="container search-filter">
         <div className="row">
         <div className="col-md-3 position-relative">
  <input type="text"  ref={searchRef} className="form-control search-input" placeholder="        Search..." />
  <i className="fas fa-search search-icon"></i>
</div>
         </div>
       </section>
         <div className="cart-info">
         <div>
         <a href='/payment'><i className="fas fa-shopping-bag bag-icon"></i> </a>
</div>
         </div>
       </header> 

       <section className='main-content'>
<div className='bag'>
<h1>Bag</h1>
    </div>
<div className='payment-section'>
<img className="product-img2" src={product.image} alt={product.title} />
<p className='payment-title'>{product.title}</p>
<p className='payment-cate'>{product.category}</p>
<p className='payment-size'>Size {selectedSize}</p>
<p className='payment-price'>${product.price}</p>
</div>

<h1 className="summary-title">Summary</h1>
  <div className="summary-content">
    <div className="summary-row">
      <p>Subtotal</p>
      <p>${product.price}</p>
    </div>
    <div className="summary-row">
      <p>Estimated Delivery & Handling</p>
      <p>Free</p>
    </div>
    <div className="summary-row total-row">
      <p>Total</p>
      <p>${product.price}</p>
    </div>
  </div>
  <div className="checkout-buttons">
    <button className="checkout-btn" onClick={payment}>Guest Checkout</button>
    <button className="checkout-btn">Member Checkout</button>
    <button className="paypal-btn" onClick={payment}>PayPal</button>
  </div>


<div>

</div>
<div className='quanty'>
<QuantityButton />
</div>
       </section>
       <SliderMove/>
       <Footer/>
        </>
    )
}

export default Payment