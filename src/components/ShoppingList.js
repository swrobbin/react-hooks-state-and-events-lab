import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
 const [selectedCategory, setSelectedCategory] = useState("All")
 let filteredItems =['']

 function changeHandler(e){
  setSelectedCategory(e.target.value)
  

 }
 filteredItems = items.filter((item) => {
  if (selectedCategory === "All") {
  return true} 
    else  return item.category === selectedCategory
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={changeHandler} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
