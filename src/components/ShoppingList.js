import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All");
  
  function filterList() {
    let newList = [];
    if (selectedCategory !== "All") {
      newList = items.filter(item => item.category === selectedCategory);
    }
    else { newList = items;}
    return newList;
  }
  
  
  function changeCategory(e) {
    setCategory(() => e.target.value);
    console.log(selectedCategory);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterList().map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
