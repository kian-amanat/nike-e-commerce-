import React, { useState } from "react";
import './drop.css'


function DropDown({ active, setActive }) {
  const [activeDropdown, setActiveDropdown] = useState("");

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown("");
  };

  return (
    <div className={ active ? "navbar2" : "navbar"} >
      <div
        className={ active ? "menu-item2 dropdown" : "menu-item dropdown"}
        onMouseEnter={() => handleMouseEnter("Men")}
        onMouseLeave={handleMouseLeave}
      >
        Men
        {activeDropdown === "Men" && (
          <div className= { active ? "dropdown-content11" : "dropdown-content1"}>
            <div className={ active ? "dropdown-column2" : "dropdown-column"}
>
              <h4>Featured</h4>
              <a href="#">New Arrivals</a>
              <a href="#">Bestsellers</a>
              <a href="#">Shop All Sale</a>
            </div>
            <div className={ active ? "dropdown-column2" : "dropdown-column"}>
              <h4>Shoes</h4>
              <a href="#">All Shoes</a>
              <a href="#">Lifestyle</a>
              <a href="#">Running</a>
              <a href="#">Basketball</a>
            </div>
            <div className={ active ? "dropdown-column2" : "dropdown-column"}>
              <h4>Clothing</h4>
              <a href="#">All Clothing</a>
              <a href="#">Tops and T-Shirts</a>
              <a href="#">Hoodies and Sweatshirts</a>
            </div>
            <div className={ active ? "dropdown-column2" : "dropdown-column"}>
              <h4>Shop By Sport</h4>
              <a href="#">Running</a>
              <a href="#">Basketball</a>
              <a href="#">Football</a>
            </div>
          </div>
        )}
      </div>

      {/* Women Dropdown */}
      <div
        className={ active ? "menu-item2 dropdown" : "menu-item dropdown"}
        onMouseEnter={() => handleMouseEnter("Women")}
        onMouseLeave={handleMouseLeave}
      >
        Women
        {activeDropdown === "Women" && (
          <div className= { active ? "dropdown-content22" : "dropdown-content2"}>
            <div className={ active ? "dropdown-column2" : "dropdown-column"}>
              <h4>Featured</h4>
              <a href="#">New Arrivals</a>
              <a href="#">Bestsellers</a>
              <a href="#">Shop All Sale</a>
            </div>
            <div className={ active ? "dropdown-column2" : "dropdown-column"}>
              <h4>Shoes</h4>
              <a href="#">All Shoes</a>
              <a href="#">Lifestyle</a>
              <a href="#">Running</a>
              <a href="#">Basketball</a>
            </div>
            <div className={ active ? "dropdown-column2" : "dropdown-column"}>
              <h4>Clothing</h4>
              <a href="#">All Clothing</a>
              <a href="#">Tops and T-Shirts</a>
              <a href="#">Hoodies and Sweatshirts</a>
            </div>
            <div className={ active ? "dropdown-column2" : "dropdown-column"}>
              <h4>Shop By Sport</h4>
              <a href="#">Running</a>
              <a href="#">Basketball</a>
              <a href="#">Football</a>
            </div>
          </div>
        )}
      </div>

      {/* Kids Dropdown */}
      <div
        className={ active ? "menu-item2 dropdown" : "menu-item dropdown"}
        onMouseEnter={() => handleMouseEnter("Kids")}
        onMouseLeave={handleMouseLeave}
      >
        Kids
        {activeDropdown === "Kids" && (
          <div className= { active ? "dropdown-content33" : "dropdown-content3"}>
            <div className={ active ? "dropdown-column2" : "dropdown-column"}>
              <h4>Featured</h4>
              <a href="#">New Arrivals</a>
              <a href="#">Bestsellers</a>
              <a href="#">Shop All Sale</a>
            </div>
            <div className={ active ? "dropdown-column2" : "dropdown-column"}>
              <h4>Shoes</h4>
              <a href="#">All Shoes</a>
              <a href="#">Lifestyle</a>
              <a href="#">Running</a>
              <a href="#">Basketball</a>
            </div>
            <div className={ active ? "dropdown-column2" : "dropdown-column"}>
              <h4>Clothing</h4>
              <a href="#">All Clothing</a>
              <a href="#">Tops and T-Shirts</a>
              <a href="#">Hoodies and Sweatshirts</a>
            </div>
            <div className={ active ? "dropdown-column2" : "dropdown-column"}>
              <h4>Shop By Sport</h4>
              <a href="#">Running</a>
              <a href="#">Basketball</a>
              <a href="#">Football</a>
            </div>
          </div>
        )}
      </div>

      {/* Sale Dropdown */}
      <div
        className={ active ? "menu-item2 dropdown" : "menu-item dropdown"}
        onMouseEnter={() => handleMouseEnter("Sale")}
        onMouseLeave={handleMouseLeave}
      >
        Sale
        {activeDropdown === "Sale" && (
          <div className= { active ? "dropdown-content44" : "dropdown-content4"}>
            <div className={ active ? "dropdown-column2" : "dropdown-column"}>
              <h4>Featured</h4>
              <a href="#">New Arrivals</a>
              <a href="#">Bestsellers</a>
              <a href="#">Shop All Sale</a>
            </div>
            <div className={ active ? "dropdown-column2" : "dropdown-column"}>
              <h4>Shoes</h4>
              <a href="#">All Shoes</a>
              <a href="#">Lifestyle</a>
              <a href="#">Running</a>
              <a href="#">Basketball</a>
            </div>
          </div>
        )}
      </div>

      {/* SNKRS Dropdown */}
      <div
        className={ active ? "menu-item2 dropdown" : "menu-item dropdown"}
        onMouseEnter={() => handleMouseEnter("SNKRS")}
        onMouseLeave={handleMouseLeave}
      >
        SNKRS
        {activeDropdown === "SNKRS" && (
          <div className= { active ? "dropdown-content55" : "dropdown-content5"}>
            <div className={ active ? "dropdown-column2" : "dropdown-column"}>
              <h4>New Arrivals</h4>
              <a href="#">Latest Drops</a>
              <a href="#">Upcoming Releases</a>
              <a href="#">Sneaker Stories</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDown;
