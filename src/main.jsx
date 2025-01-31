import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Slider1 from "./slider.jsx";
import Footer from "./footer.jsx";
import SliderMove from "./move.jsx";
import SliderItem from "./slider-item.jsx";
import DropDown from "./dropdown.jsx";
import nike from "./img/nike.png";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import products from "./data.js";
import img1 from "./img/bgAir1.jpeg";
import img2 from "./img/bgAir2.jpg";
import img3 from "./img/orange2.jpg";

function MainPage() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [active, setActive] = useState(false);
  const searchRef = useRef(null);
  const category = useRef(null);
  const filterRef = useRef(null)
  const headerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when the title comes into the viewport
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current); // Clean up observer
      }
    };
  }, []);


  const handleFilter = () => {
    const filtered = products.filter((product) => {
      const matchesColor =
        selectedColor === "" || product.color === selectedColor;
      const matchesGender =
        selectedGender === "" || product.gender === selectedGender;
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesColor && matchesGender && matchesPrice;
    });
    setFilteredProducts(filtered);
  };

  const scrollingPixels = () => {
    let header = headerRef.current;
    let filter = filterRef.current; // this should be the element, not its value
    let scrollValue = window.scrollY;
  
    if (scrollValue > 714) {
      setActive(true);
    }
    if (scrollValue < 714) {
      setActive(false);
    }
  };
  

  window.addEventListener("scroll", scrollingPixels);

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

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    console.log(newRange);
    newRange[index] = Number(e.target.value);
    console.log(newRange[index]);
    setPriceRange(newRange);
  };

  const images = [img1, img2, img3];

  return (
    <>
      <header className={active ? "header-bar2" : "header-bar"} ref={headerRef}>
        <div className="logo">
          <Link to={"/"}>
            <img src={nike} alt="nike logo" />
          </Link>
        </div>
        <DropDown active={active} setActive={setActive} />
        <section className="container search-filter">
          <div className="row">
            <div className="col-md-3 position-relative">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                onKeyPress={matchValue}
                ref={searchRef}
                className="form-control search-input"
                placeholder="Search..."
              />
            </div>
          </div>
        </section>
      </header>

      <div className="explore">
        <div className="title">
          <h1 className="title-bg1">Welcome</h1>
          <h1 className="title-bg2">Runner</h1>
          <a href="/product">
            <button className="explore-more">&#8594;</button>
          </a>
        </div>
      </div>

      <section className="container">
        <div className="row" id="product-list">
          <SliderMove />
          <h1
        ref={titleRef}
        className={`explore-title ${isVisible ? 'animate' : ''}`}
      >
        Explore More
      </h1>
<div className="filter-section" ref={filterRef}>
  <div className="filter-group">
    <label className="filter-label">Gender</label>
    <div className="filter-options">
      <input
        type="checkbox"
        id="men"
        checked={selectedGender === "Men"}
        onChange={() => setSelectedGender(selectedGender === "Men" ? "" : "Men")}
      />
      <label htmlFor="men">Men</label>

      <input
        type="checkbox"
        id="women"
        checked={selectedGender === "Women"}
        onChange={() => setSelectedGender(selectedGender === "Women" ? "" : "Women")}
      />
      <label htmlFor="women">Women</label>
    </div>
  </div>

  <div className="filter-group">
    <label className="filter-label">Color</label>
    <div className="filter-options">
      {["Black", "Blue", "Red", "White", "Green", "Pink", "Yellow"].map((color) => (
        <div key={color} className="color-option">
          <input
            type="checkbox"
            id={color}
            checked={selectedColor === color}
            onChange={() => setSelectedColor(selectedColor === color ? "" : color)}
          />
          <label htmlFor={color} className="color-box" style={{ backgroundColor: color.toLowerCase() }}></label>
          <span>{color}</span>
        </div>
      ))}
    </div>
  </div>

  <div className="filter-group">
    <label className="filter-label">Price Range</label>
    <div className="price-range">
      <input
        type="number"
        value={priceRange[0]}
        onChange={(e) => handlePriceChange(e, 0)}
        placeholder="Min"
        className="price-input"
      />
      <input
        type="number"
        value={priceRange[1]}
        onChange={(e) => handlePriceChange(e, 1)}
        placeholder="Max"
        className="price-input"
      />
    </div>
  </div>

  <button className="apply-filters" onClick={handleFilter}>Apply Filters</button>
</div>
          <div className="product-container">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <Link to={`/product/${index}`} key={index}>
                  <div className="product-card">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <div className="card-info">
                        <p className="card-text">
                          <strong>${product.price}</strong>
                        </p>
                        <button className="btn-primary">
                          <span>Add to cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
          <SliderItem />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainPage;
