import React, { useState } from "react";
import './AddressForm.css';
import Subtotal from './Subtotal';

const AddressForm = ({ subTotal }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    country: "",
    zipcode: "",
    city: "",
    state: "",
    phoneNumber: ""
  });

  const [savedAddress, setSavedAddress] = useState(null);
  const [counter, setCounter] = useState(0);

  // Array of Indian states
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry"
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSaveAddress = () => {
    setCounter(1);
    setSavedAddress(formData);    
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="address-container mt-4 shadow-lg w-1/2 pr-4">
          <h1>Shipping</h1>
          <p>Please enter your shipping details.</p>
          <hr />
          <div className="address-form mt-4">
            <div className="fields fields--2">
              <label className="field">
                <span className="field__label" htmlFor="firstname">First name</span>
                <input className="field__input" type="text" id="firstname" name="firstName" value={formData.firstName} onChange={handleInputChange} />
              </label>
              <label className="field">
                <span className="field__label" htmlFor="lastname">Last name</span>
                <input className="field__input" type="text" id="lastname" name="lastName" value={formData.lastName} onChange={handleInputChange} />
              </label>
            </div>
            <label className="field">
              <span className="field__label" htmlFor="addressLine1">Address Line 1</span>
              <input className="field__input" type="text" id="addressLine1" name="addressLine1" value={formData.addressLine1} onChange={handleInputChange} />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="addressLine2">Address Line 2</span>
              <input className="field__input" type="text" id="addressLine2" name="addressLine2" value={formData.addressLine2} onChange={handleInputChange} />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="landmark">Landmark</span>
              <input className="field__input" type="text" id="landmark" name="landmark" value={formData.landmark} onChange={handleInputChange} />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="phoneNumber">Phone Number</span>
              <input className="field__input" type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="country">Country</span>
              <select className="field__input" id="country" name="country" value={formData.country} onChange={handleInputChange}>
                <option value=""></option>
                <option value="India">India</option>
              </select>
            </label>
            <div className="fields fields--3">
              <label className="field">
                <span className="field__label" htmlFor="zipcode">Zip code</span>
                <input className="field__input" type="text" id="zipcode" name="zipcode" value={formData.zipcode} onChange={handleInputChange} />
              </label>
              <label className="field">
                <span className="field__label" htmlFor="city">City</span>
                <input className="field__input" type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />
              </label>
              <label className="field">
                <span className="field__label" htmlFor="state">State</span>
                <select className="field__input" id="state" name="state" value={formData.state} onChange={handleInputChange}>
                  <option value=""></option>
                  {indianStates.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className='address-btn mt-2'><button className="button" onClick={handleSaveAddress}>Save Address</button></div>
        </div>
        { counter !== 0 && (
        <div className="w-1/2 pl-4">
          <h2 className="text-xl font-medium">Purchase Summary</h2>
          <div className="bg-white rounded mt-2 shadow-lg">
            <Subtotal newAddress={savedAddress} totalPrice={subTotal} selectedAddressId={-1}/>
          </div>
        </div>
        ) }
      </div>
    </>
  );
};

export default AddressForm;