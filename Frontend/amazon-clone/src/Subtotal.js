import React, { useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useUserIdContext } from "./Context/UserIdContext";
import CustomAlert from "./Components/CustomAlert";

function Subtotal({ newAddress, totalPrice, orderStatus, selectedAddressId }) {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const { userId } = useUserIdContext();
  const [orderPlacedAlert, setOrderPlaceAlert] = useState(0);
  const [isCodChecked, setIsCodChecked] = useState(false);

  // Function to get today's date in "YYYY-MM-DD" format
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Function to handle the click event on the "Proceed to Checkout" button
  const handleProceedToCheckout = async () => {
    // Redirect to the checkout page when the button is clicked
    console.log(selectedAddressId);
    if (orderStatus === 0) {
      history.push("/paymentoptions");
    } else if (isCodChecked) {
      await axios.post('http://localhost:8082/order-service/placeOrder', {
        addressStatus: selectedAddressId,
        addAddressReq: {
          userId: userId,
          customerName: newAddress.firstName + " " + newAddress.lastName,
          addressLine1: newAddress.addressLine1,
          addressLine2: newAddress.addressLine2,
          city: newAddress.city,
          pinCode: parseInt(newAddress.zipcode),
          country: newAddress.country,
          landmark: newAddress.landmark,
          phoneNumber: newAddress.phoneNumber,
          state: newAddress.state
        },
        paymentMethod: "CASH",
        orderTotal: totalPrice,
        orderDate: getCurrentDate()
      })
      .then(response => {
        // Handle response
        console.log('Response:', response.data);
        if (response.data === 1) {
          setOrderPlaceAlert(1);
        }
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
      });
    } else {
      alert("Please select Cash On Delivery to proceed.");
    }
  };

  return (
    <div className="subtotal mt-2 shadow-lg">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="bill-detail">
              <div><h6>Bill details</h6></div>
              <div className="bill-data">
                <li><div className="bill-data-name"><i className='bx bx-file'></i> Item Total</div> <span>Rs {totalPrice}</span></li>
                <li><div className="bill-data-name"><i className='bx bx-run'></i> Delivery Charge</div> <span>Rs 15</span></li>
                <li><div className="bill-data-name"><span>Grand Total</span></div> <span>Rs {totalPrice + 15}</span></li>
              </div>
            </div>

            <div className="bill-detail">
              <div><h6>Cancellation Policy</h6></div>
              <p>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
            </div>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <div className="bill-detail p-0 mt-4">
      {orderStatus !== 0 &&
          <div className="cod-checkbox">
            <input 
              type="checkbox" 
              id="cod" 
              checked={isCodChecked} 
              onChange={(e) => setIsCodChecked(e.target.checked)} 
            />          
            <label htmlFor="cod">Cash On Delivery</label>          
          </div>
        }
        {orderPlacedAlert === 0 &&
          <button className="button" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        }
        {orderPlacedAlert === 1 && <CustomAlert message="Order placed successfully!" />}
      </div>
    </div>
  );
}

export default Subtotal;