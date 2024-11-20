  import React from 'react';
  import { Link } from 'react-router-dom';
  import { useState , useEffect , useRef } from 'react';
  import Slider1 from "./slider.jsx";
  import Footer from './footer.jsx'
  import SliderMove from './move.jsx';
  import SliderItem from './slider-item.jsx';
  import DropDown from "./dropdown.jsx"
  import nike from './img/nike.png'
 import './index.css';
 import 'bootstrap-icons/font/bootstrap-icons.css';
 import '@fortawesome/fontawesome-free/css/all.min.css';
 import products from './data.js';
 import img1 from "./img/bgAir1.jpeg";
 import img2 from "./img/bgAir2.jpg";
 import img3 from "./img/orange2.jpg";
 

 function MainPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [active , setActive] = useState(false)
  const searchRef = useRef(null);
  const category = useRef(null);
  let [count , setCount] = useState(0)
  const headerRef = useRef(null);


  function scrollingPixels(){
    let header =  headerRef.current
    let scrollValue = window.scrollY
    if(scrollValue > 714){
   setActive(true)

    }
    if(scrollValue < 714){
      setActive(false)
    }
  }

  window.addEventListener("scroll", scrollingPixels);



function displayCategory(){
 let categoryValue = category.current.value
 if(categoryValue){
 let filteredProducts = products.filter((product) => product.category === categoryValue)
 setFilteredProducts(filteredProducts)
 } 
 if (filteredProducts.length === 0) {
  console.log(`No products found for category: ${categoryValue}`);
}

}



  function matchValue(){
    let searchValue = searchRef.current.value.toLowerCase().trim()
    console.log(searchValue)
    if(searchValue !== "" ){

      const matchedProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchValue)
    );
    console.log(filteredProducts)
    setFilteredProducts(matchedProducts); 
             }else {
          setFilteredProducts(products); 
      }
  }
    const images = [img1, img2, img3];
   return (
     <>
       <header className={active ? "header-bar2" : "header-bar"} ref={headerRef}>
       <div className="logo">
       <Link to={'/'}><img src={nike} alt="nike logo"/></Link>
         </div>
         <DropDown active={active} setActive={setActive} />
         <section className="container search-filter">
         <div className="row">
         <div className="col-md-3 position-relative">
  <input type="text" onKeyPress={matchValue} ref={searchRef} className="form-control search-input" placeholder="Search..." />
  <i className="fas fa-search search-icon"></i>
</div>

         </div>
       </section>
         <div className="cart-info">
         <div>
         <a href='/register'><i className="fas fa-shopping-bag bag-icon"></i> </a>
         {count}

</div>
         </div>
       </header> 

       <div className='explore'>
        <div className='title'>
        <h1 className='title-bg1'>Welcome</h1>
        <h1 className='title-bg2'>Runner</h1>
        <a href='/product'>
       <button className='explore-more'>
       &#8594;
      </button>
       </a>
        </div>
      
 
</div>
       <section className="container">
         <div className="row" id="product-list">
        
            {/* <Slider1 images={images}/> */}
            <SliderMove />
            <div>
            <h1>Explore More</h1>
         <div className="col-md-2">
             <select className="form-select" ref={category} onChange={displayCategory}>
               <option value="All Shoes">All Shoes</option>
               <option value="Casual">Casual</option>
               <option value="Running">Running</option>
             </select>
           </div>
           <div className="product-container">
            
           {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                      <Link to={`/product/${index}`} key={index}>
                            <div className="product-card">
                                <img src={product.image} className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text"><strong>${product.price}</strong></p>
                                    <button className="btn-primary">Add to cart</button>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>No products found.</p> 
                )}
</div>
<SliderItem/>

         </div>
         </div>
       </section>

        <footer>
<Footer/>
        </footer>

     </>
   );
 }
 
 export default MainPage;