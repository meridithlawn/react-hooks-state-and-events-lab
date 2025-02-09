//import React from "react";
import React, {useState} from "react";

// when the user clicks the <button> element, the item should be added to their virtual cart. 

// The way we'll show the user that the item is in the cart is by changing the className on the <li> element:

// {/* <li className="in-cart">
// {/* the item is in the cart */}
// </li>

// <li className="">
// {/* the item is NOT in the cart */}
// </li> */}

// If the item is not in the cart, the <button> element's text should read "Add to Cart"
// and if the item is in the cart, the <button> element's text should read "Remove From Cart"




function Item({ name, category }) {


  const [isInCart, setIsInCart] = useState(false)

  function handleAddToCart () {
    setIsInCart((isInCart => !isInCart))
    console.log("working")
  }


  const cartVariable = isInCart ? "Remove From Cart" : "Add to Cart"
  return (
    <li className = {isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart}className= {isInCart ? "remove" : "add"} >{cartVariable}</button>
    </li>
  );
}

export default Item;
