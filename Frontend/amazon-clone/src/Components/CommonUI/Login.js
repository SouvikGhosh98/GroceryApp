import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useUserIdContext } from "../../Context/UserIdContext";

import OTPInput from "./OTPInput";

const Login = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const {getUserId} =useUserIdContext();

  const handleSubmit = async (otp) => {
    // Handle OTP submission here
    console.log('Submitted OTP:', otp);

    await axios.post('http://localhost:8080/login-service/login', { email: userEmail, otp: parseInt(otp)})
    .then(response => {
      // Handle response
      console.log('Response:', response.data);
      getUserId(response.data);
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    });
  };

  const handleGetOtp = async () => {    

    await axios.get('http://localhost:8084/otp-service/otpVerification/' + userEmail)
    .then(response => {
      // Handle response
      console.log('Response:', response.data);      
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    });
    
     setShowOtp(true);
  };

  return (
    <>
      
        <div className="login__container">
          <div className="login__box">
            <i className="bx bx-chevrons-right bx-fade-right"></i>
          </div>
          <div className="login__box">
            <p>
              <span>India's Last minute app</span>
            </p>
          </div>
          <div className="login__box">
            <p>Login or Sign up</p>
          </div>

          <div className="login__box__input">
            {!showOtp ? (
              <>
              <div className="mt-2">
                <input
                  type="text"
                  name="inputname"
                  placeholder="Enter Mobile no..."
                  className="block w-56 rounded-md py-2 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                {/* <button onClick={() => setShowOtp(true)}>Show OTP</button> */}
              </div>
              <div className="login__box__button">
              <button
                type="button"
                className="button"
                onClick={handleGetOtp}
              >
                Continue
              </button>
            </div>
            </>
            ) : (
              <OTPInput length={6} onSubmit={handleSubmit} />
            )}
          </div>

          
        </div>
        <div className="login__footer">
          <span>
            By continuing, you agree to our Terms of service & Privacy policy
          </span>
        </div>
      
    </>
  );
};

export default Login;