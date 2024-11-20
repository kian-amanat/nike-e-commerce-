import React from "react";
import { useState, useEffect, useRef } from "react";
import products from "./data.js";
import { useParams, useNavigate } from "react-router-dom";
import DropDown from "./dropdown.jsx";
import nike from "./img/nike.png";
import Footer from "./footer.jsx";
import "./detail.css";
import SliderMove from "./move.jsx";
import { Link } from "react-router-dom";

function ProductDetail() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [pick, setPick] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [active, setActive] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null); // State for storing selected size
  const searchRef = useRef(null);
  const category = useRef(null);
  let [count, setCount] = useState(0);
  const headerRef = useRef(null);
  const { index } = useParams();
  const navigate = useNavigate();

  const product = products[parseInt(index)];

  function addToCard() {
    if (pick && selectedSize) {
      navigate(`/payment/${index}`, { state: { selectedSize } }); // Pass the size to the payment page
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }

  function selectSize(size) {
    setPick(true);
    setIsDisabled(false);
    setSelectedSize(size);
  }

  function matchValue() {
    let searchValue = searchRef.current.value.toLowerCase().trim();
    if (searchValue !== "") {
      const matchedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchValue)
      );
      setFilteredProducts(matchedProducts);
    } else {
      setFilteredProducts(products);
    }
  }

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
              <input
                type="text"
                onKeyPress={matchValue}
                ref={searchRef}
                className="form-control search-input"
                placeholder="Search..."
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
      <section className="main">
        <div className="product">
          <h1 className="product-title">{product.title}</h1>
          <div className="card-container">
            <img
              className="product-img"
              src={product.image}
              alt={product.title}
            />
            <div className="right-side"></div>
            <div className="size">
              <h3>Select Size:</h3>
              <div
                className="size-container"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                {product.size.map((size, idx) => (
                  <button
                    onClick={() => selectSize(size)} // Pass size to selectSize
                    key={idx}
                    style={{
                      padding: "10px 0",
                      backgroundColor: idx % 2 === 0 ? "#f5f5f5" : "#ffffff",
                      border: "1px solid #d1d1d1",
                      borderRadius: "8px",
                      color: idx % 2 === 0 ? "#a1a1a1" : "#000",
                      fontWeight: "bold",
                      cursor: idx % 2 === 0 ? "not-allowed" : "pointer",
                      textAlign: "center",
                      transition: "background-color 0.2s",
                      fontSize: "15px",
                      fontWeight: "400",
                    }}
                    disabled={idx % 2 === 0}
                  >
                    EU {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <p className="price">${product.price}</p>
        </div>
        <div className="card-btn">
          <button
            onClick={addToCard}
            disabled={isDisabled}
            style={{
              color: isDisabled ? "gray" : "black",
              cursor: isDisabled ? "not-allowed" : "pointer",
              backgroundColor: isDisabled ? "#f0f0f0" : "#fff",
            }}
          >
            Add To Card
          </button>
          <button>Favorite</button>
        </div>
      </section>
      <SliderMove />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default ProductDetail;
