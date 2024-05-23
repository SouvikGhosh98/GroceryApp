import React, { useState } from "react";
import "./Categories.css";
import catImage from "../../../images/icon-bread-herb-flour.png";
import prodimg from "../../../images/thumb-bananas.png";
import SingleProduct from "../SingleProduct/SingleProduct";

const Categories = ({ category }) => {
  const [showSingleProduct, setShowSingleProduct] = useState(false);

  const handleClick = () => {
    setShowSingleProduct(!showSingleProduct);
  };

  return (
    <>
      <div className="thumb-wrapper category-box" onClick={handleClick}>
        {/* <span className="sale-icon">
          -30%
        </span> */}
        <div className="img-box category-img-box">
          <img src={prodimg} className="img-fluid category-img" alt="" />
        </div>
        <div className="thumb-content category-thumb-content">
          <h4>{category.categoryName}</h4>
        </div>
      </div>
      {showSingleProduct && <SingleProduct />}
    </>
  );
};

export default Categories;