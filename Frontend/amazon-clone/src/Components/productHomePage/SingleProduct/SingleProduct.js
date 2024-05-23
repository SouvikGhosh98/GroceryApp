import React, { useState ,useEffect} from "react";
import "./SingleProduct.css";
import prodimg from "../../../images/thumb-bananas.png";
import axios from 'axios';
import { useStateValue } from "../../../StateProvider";
import { useUserIdContext } from "../../../Context/UserIdContext";

const SingleProduct = ({ product }) => {
  const [{ basket }, dispatch] = useStateValue();

  const [counterValue, setCounterValue] = useState(0);

  const { userId } = useUserIdContext();

  const [buttonClicked, setButtonClicked] = useState(false);

  // useEffect(() => {
  //   const setInitialCounterValue = ( ) => {
  //     const countOccurrences = () => basket.filter(item => item.id === product.id).length;
  //     setCounterValue(countOccurrences);
  //   }
  //   setInitialCounterValue();
  // }, [basket]);
  
  
  // const addToBasket = () => {
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id: product.id,
  //       name: product.name,
  //       quantity:product.quantity,
  //       image: product.image,
  //       price: product.price,
  //     },
  //   });
  // };

  // console.log(basket);

  // const removeFromBasket = () => {
  //   dispatch({
  //     type: "REMOVE_FROM_BASKET",
  //     id: product.id,
  //   });
  // };

  useEffect(() => {
    if(buttonClicked) {
    addToCart(product.id);
    setButtonClicked(false);
    }
  }, [buttonClicked, counterValue, userId, product.id]);

  const addToCart=async(pid)=> {
    console.log(pid);
    console.log(userId);
    console.log(counterValue);
    await axios.post('http://localhost:8083/cart-service/updateCart', { userId: userId, productId: pid, newQuantity: counterValue })
    .then(response => {
      // Handle response
      console.log('Response:', response.data);      
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    });

  };

  const incrementCounter = () => {
    if(userId!=0) {    
    setCounterValue((prevValue) => prevValue + 1);
    setButtonClicked(true);
    //addToBasket();
    //addToCart(pid);
    }
  };

  const decrementCounter = () => {
    if(userId!=0) {
    if (counterValue > 0) {
      setCounterValue((prevValue) => prevValue - 1);
      setButtonClicked(true);
      console.log(counterValue);          
      //removeFromBasket();
      //addToCart(pid);
    }
  }
  };

  return (
    <div className="thumb-wrapper">
      <span className="sale-icon">-30%</span>
      <div className="img-box">
        <img src={product.imageUrl} className="img-fluid" alt="vvcvc" />
      </div>
      <div className="thumb-content">
        <h4>{product.productName}</h4>
        <p className="item-price">
          <strike>Rs 400.00</strike> <b>Rs {product.price}</b>
        </p>
        <p className="item-price">
          {/* <b>{product.quantity}</b> */}
          <b>1 kg</b>
        </p>
        <div>
          {counterValue === 0 || userId==0 ? (
            <button className="btn btn-primary" onClick={incrementCounter}>
              Add
            </button>
          ) : (
            <div className="">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;