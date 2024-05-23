import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  // const viewProduct = () => {
  //   console.log("Hello!");
  //   var productDescription = document.getElementsByClassName("productDescription");
  //   productDescription.style.display = "block";
  // };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      
      
      <div className="product__buttons">

      <button onClick={addToBasket}>Add to Basket</button>

      <Link className="product__buttons" to={{
        pathname:'/productdescription',
        state: { product_info: { id, title, image, price, rating }  }
      }} >
      <button >View Product</button>
      </Link>

      </div>
      
      

    </div>

    
  );
}

export default Product;