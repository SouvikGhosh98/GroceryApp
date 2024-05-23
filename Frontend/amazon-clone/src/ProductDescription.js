// import React from "react";
import "./ProductDescription.css"
import { useLocation } from "react-router-dom";
import { useStateValue } from "./StateProvider";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ProductDescription() {
  const location = useLocation();
  //   const location = useLocation();
  //   const formData = location.state;

  console.log(location.state);

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        rating: product.rating,
      },
    });
  };

  const product = {
    id: location.state.product_info.id,
    title: location.state.product_info.title,
    image: location.state.product_info.image,
    price: location.state.product_info.price,
    rating: location.state.product_info.rating,
  };

  const displayHidden = () => {
    // Implement your logic to add the product to the cart
    // alert("Product added to cart!");

    const addReview = document.getElementById("add-review");
    const reviewForm = document.getElementById("review");
    reviewForm.style.display = "block";
  };

  const [formData, setFormData] = useState({
    customerName: "",
    rating: "5",
    description: "",
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    // For simplicity, let's just navigate to the ReviewDisplay page with the form data
    // history.push("/review-display", formData);

    // const addReview = document.getElementById("add-review");
    const reviewForm = document.getElementById("review");
    reviewForm.style.display = "none";

    const reviewDisplay = document.getElementById("review_display");
    reviewDisplay.style.display = "block";
    console.log("working");
  };


  const handleClose = () => {
    // You can add additional logic here if needed
    // history.push('/');
    const reviewDisplay = document.getElementById("review_display");
    reviewDisplay.style.display = "none";
  };

  return (
    <div className="box">
      <div className="product-description">
        <div className="product-image">
          <img src={product.image} alt="Product" />
        </div>

        <div className="product-details">
          <h1>Product Name</h1>
          <p>{product.title}</p>
          <h3>${product.price}</h3>

          <div className="product-rating">
            {/* Your rating stars or any other rating representation */}
            Rating: {product.rating}/5
          </div>
        </div>

        <div className="add-to-cart">
          <button onClick={addToBasket}>Add to Cart</button>
        </div>

        <div className="add-to-cart" id="add-review">
          <button onClick={displayHidden}>Add Review</button>
        </div>

        
          <div className="review-display-container" 
          >
            <div className="review-display" id="review_display" style={{ display: "none" }} >
              <button className="close-button" onClick={handleClose}>
                &times;
              </button>
              <h2>Review Details</h2>
              <p>
                <strong>Customer Name:</strong> {formData.customerName}
              </p>
              <p>
                <strong>Rating:</strong> {formData.rating} stars
              </p>
              <p>
                <strong>Review Description:</strong> {formData.description}
              </p>
            </div>
          </div>
        

        <div
          className="review-form reviews"
          id="review"
          style={{ display: "none" }}
        >
          <h2>Leave a Review</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="customerName">Customer Name</label>
              <input
              className="review_input"
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <select
                id="rating"
                name="rating"
                className="review_rating"
                value={formData.rating}
                onChange={handleInputChange}
                required
              >
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
                <option value="2">2 stars</option>
                <option value="1">1 star</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Review Description</label>
              <textarea
              className="review_textarea"
                id="description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
