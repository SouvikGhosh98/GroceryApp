import React, { useEffect, useState } from "react";
import "./Checkout.css";
import axios from 'axios';
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { useUserIdContext } from "./Context/UserIdContext";

function Checkout({handleSTotal, orderStatus, handleStatus}) {
  const [{ basket, user }, dispatch] = useStateValue();
  const [uniqueItems, setUniqueItems] = useState([]);
  const {userId} = useUserIdContext();
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   // Calculate the count of unique IDs
  //   const uniqueIds = basket.reduce((acc, item) => {
  //     if (!acc[item.id]) {
  //       acc[item.id] = { ...item, count: 1 }; // Add count property to item
  //     } else {
  //       acc[item.id].count++;
  //     }
  //     return acc;
  //   }, {});

  //   // Convert uniqueIds object to array of objects
  //   const uniqueItemsArray = Object.values(uniqueIds);

  //   // Set the state with uniqueItemsArray
  //   setUniqueItems(uniqueItemsArray);
  // }, [basket]);

  useEffect(()=>{
    handleStatus(0);
    getCart();
  },[userId]);

  // useEffect(()=>{
  //   getTotalPrice();
  // },[userId]);
  
function getTotalPrice(items) {

  let tPrice=0;

  items.forEach((item) => {
  
  const subtotal = item.price * item.quantity;
  
  tPrice += subtotal;

});

setTotalPrice(tPrice);
handleSTotal(tPrice);
};

  const getCart=async()=>{
    await axios.get('http://localhost:8083/cart-service/getCart/' + userId)
    .then(response => {
      // Handle response
      console.log('Response:', response.data);
      getTotalPrice(response.data);

      setUniqueItems(response.data);     
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    });
  }

  //console.log(uniqueItems);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

<h2 className="checkout__title">Your shopping Basket</h2>

        <div className="checkout-cart">
          
            {/* <h2 className="checkout__title">Your shopping Basket</h2> */}
          

          <div className="cart-left">
            {uniqueItems.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                name={item.productName} // Assuming you have a name field in your basket items
                quantity={item.quantity}
                image={item.imageUrl} // Assuming you have an image field in your basket items
                price={item.price} // Assuming you have a price field in your basket items
                rating={item.rating} // Assuming you have a rating field in your basket items
                count={item.quantity} // Pass the count of each unique item to the child component
              />
            ))}
          </div>
          {uniqueItems.length!==0 && (
          <div className="checkout__right cart-right">
            <Subtotal totalPrice={totalPrice} orderStatus={orderStatus}/>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;