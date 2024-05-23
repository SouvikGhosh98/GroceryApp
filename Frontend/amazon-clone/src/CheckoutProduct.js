import { useEffect } from "react";
import React, { useState } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({
  key,
  id,
  image,
  name,
  quantity,
  price,
  rating,
  count,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const [counterValue, setCounterValue] = useState(0);

  useEffect(() => {
    // const setInitialCounterValue = ( ) => {
    //   const countOccurrences = () => basket.filter(item => item.id === product.id).length;
    //   setCounterValue(countOccurrences);
    // }
    // setInitialCounterValue();
    setCounterValue(count);
  }, []);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        quantity: quantity,
        image: image,
        price: price,
      },
    });
  };

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const incrementCounter = () => {
    setCounterValue((prevValue) => prevValue + 1);
    addToBasket();
  };

  const decrementCounter = () => {
    if (counterValue > 0) {
      setCounterValue((prevValue) => prevValue - 1);
      removeFromBasket();
    }
  };

  return (
    <div className="cart-wrapper">
      <div className="checkoutProduct">
        <div className="img-wrappers">
          <img className="checkoutProduct__image" src={image} />
        </div>

        <div className="checkoutProduct__info">
          <div>
            <p className="checkoutProduct__title">{name}</p>
            <p className="checkoutProduct__price"> {quantity} </p>
            <p className="checkoutProduct__price">
              <small>Rs </small>
              <strong>{price}</strong>
            </p>
          </div>
        </div>
        <div className="button-wrapper">
          <div className="input-group product-qty">
            <span className="input-group-btn">
              <button
                type="button"
                className="quantity-left-minus btn-danger btn-number"
                data-type="minus"
                onClick={decrementCounter}
              >
                -
              </button>
            </span>

            <span className="counter-value">{counterValue}</span>

            <span className="input-group-btn">
              <button
                type="button"
                className="quantity-right-plus btn-success btn-number"
                data-type="plus"
                onClick={incrementCounter}
              >
                +
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;