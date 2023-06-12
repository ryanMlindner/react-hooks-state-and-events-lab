import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setCart] = useState(false);

  function changeCart(e) {
    e.target.parentElement.classList.toggle("in-cart");
    setCart(inCart => !inCart);
  }
  
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeCart}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
