import React, { useState } from "react";

function Item({ name, category }) {
const [liClass, setLiClass] = useState('')

function clickHandler(){
  liClass === '' ? setLiClass("in-cart") : setLiClass('')

}


  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button  onClick={clickHandler} className="add">{liClass === '' ? 'Add to Cart' : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
