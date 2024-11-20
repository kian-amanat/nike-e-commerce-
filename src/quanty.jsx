import React, { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";
import './quantity.css'
function QuantityButton() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const resetQuantity = () => {
    setQuantity(0);
  };

  return (
    <div className="quantity-btn">
      <button onClick={resetQuantity} className="icon-btn">
        <FaTrash />
      </button>
      <span className="quantity">{quantity}</span>
      <button onClick={increaseQuantity} className="icon-btn">
        <FaPlus />
      </button>
    </div>
  );
}

export default QuantityButton;
