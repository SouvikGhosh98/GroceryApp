import React, { useEffect, useState } from "react";
import Subtotal from "./Subtotal";
import axios from 'axios';
import { useHistory } from "react-router-dom"; // Import useHistory hook
import { useUserIdContext } from "./Context/UserIdContext";

import './DeliveryPayment.css'

const DeliveryPayment = ({subTotal, handleStatus}) => {
  const history = useHistory(); // Initialize useHistory hook
  const { userId } = useUserIdContext();
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(-1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    country: "",
    zipcode: 0,
    city: "",
    state: "",
    phoneNumber: ""
  });

  useEffect(() => {
    handleStatus(1);
    fetchAddresses();
  }, [userId]);

  const fetchAddresses = async () => {
    try {
      const response = await axios.get(`http://localhost:8082/order-service/getAllAddresses/${userId}`);
      setAddresses(response.data);     
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  const handleRadioChange = (addressId) => {
    setSelectedAddressId(addressId);
    console.log(addressId);
  };

  // Function to handle the click event on the "Add Another Address" button
  const handleAddAddress = () => {
    // Redirect to the address adding page when the button is clicked
    history.push("/addressform");
  };

  return (
    <>
      <div className="flex items-center justify-center  min-h-screen bg-gray-100 text-gray-800 p-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-medium">Delivery Address</h2>
            <div className="bg-white rounded mt-2 shadow-lg">
              <div className="border-t">
                <form class="form">
                  <h2 className="mb-2 ml-4">Select Address</h2>
                  {/* Map through addresses array and render each address dynamically */}
                  {addresses.map(address => (
                    <div key={address.id} className="inputGroup border-t">
                      <input id={`radio${address.id}`}
                        name="radio"
                        type="radio"
                        onChange={() => handleRadioChange(address.id)}/>
                      <label htmlFor={`radio${address.id}`}>
                        <p>{address.customerName}, {address.phoneNumber}</p>
                        <p>{address.addressLine1}, {address.addressLine2}, {address.city}, {address.pinCode}</p>
                      </label>
                    </div>
                  ))}
                </form>
              </div>
            </div>
            <div className="bg-white rounded mt-0 shadow-lg">
              {/* Add onClick event handler to call handleAddAddress */}
              <button className="add__address" onClick={handleAddAddress}>
                <i className='bx bx-plus bx-tada mx-1'></i> Add Another Address
              </button>
            </div>
          </div>
          { selectedAddressId !== -1 && (
          <div>
            <h2 className="text-xl font-medium">Purchase Summary</h2>            
            <div className="bg-white rounded mt-3 shadow-lg">                
                <Subtotal newAddress={formData} totalPrice={subTotal} selectedAddressId={selectedAddressId} />                
            </div>            
          </div>
          ) }
        </div>
      </div>
    </>
  );
};

export default DeliveryPayment;