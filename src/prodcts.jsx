import { useState , useEffect , useRef } from 'react';
import { useParams } from 'react-router-dom';
import "./product.css"
import { Link } from 'react-router-dom';
import products from './data.js';
import DropDown from './dropdown.jsx';
import nike from './img/nike.png'
import Footer from './footer.jsx'
import SliderMove from './move.jsx';

function PruductsComponent() {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [active , setActive] = useState(true)
    const searchRef = useRef(null);
    const category = useRef(null);
    let [count , setCount] = useState(0)
    const headerRef = useRef(null);




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



  function incrementCount(){
    setCount(prevCount => prevCount + 1);
    console.log(count)
  }

    return (
        <div>
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



       <div className="product-container-2">
            
       {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                      <Link to={`/product/${index}`} key={index}>
                            <div className="product-card">
                                <img src={product.image} className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text"><strong>${product.price}</strong></p>
                                    <button className="btn-primary" onClick={incrementCount}>Add to cart</button>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>No products found.</p> 
                )}

 </div>
 <SliderMove/>



<footer>
<Footer/>
</footer>
        </div>
 
    );
}

export default PruductsComponent;