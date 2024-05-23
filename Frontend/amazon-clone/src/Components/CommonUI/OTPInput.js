import React, { useState, useRef, useEffect } from 'react';
import './OTPInput.css'

function OTPInput({ length = 6, onSubmit }) {
  const [values, setValues] = useState(Array(length).fill(''));
  const inputRefs = useRef(Array(length).fill(null));

  useEffect(() => {
    inputRefs.current.forEach((input, index) => {
      input.dataset.index = index;
      input.addEventListener("keyup", handleOtp);
      input.addEventListener("paste", handleOnPasteOtp);
    });

    // return () => {
    //   inputRefs.current.forEach((input) => {
    //     // input.removeEventListener("keyup", handleOtp);
    //     // input.removeEventListener("paste", handleOnPasteOtp);
    //   });
    // };
  }, [length]);

  const handleOtp = (e) => {
    const input = e.target;
    let value = input.value;
    let isValidInput = value.match(/[0-9a-z]/gi);
    input.value = "";
    input.value = isValidInput ? value[0] : "";

    let fieldIndex = input.dataset.index;
    if (fieldIndex < length - 1 && isValidInput) {
      input.nextElementSibling.focus();
    }

    if (e.key === "Backspace" && fieldIndex > 0) {
      input.previousElementSibling.focus();
    }

    if (fieldIndex == length - 1 && isValidInput) {
      submit();
    }
  };

  const handleOnPasteOtp = (e) => {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length === length) {
      inputRefs.current.forEach((input, index) => {
        input.value = value[index];
      });
      submit();
    }
  };

  const submit = () => {
    console.log("Submitting...");
    let otp = "";
    inputRefs.current.forEach((input) => {
      otp += input.value;
      input.disabled = true;
      input.classList.add("disabled");
    });
    console.log(otp);
    if (onSubmit) {
      onSubmit(otp);
    }
  };

  return (
    <div>
      <h1>Enter OTP</h1>
      <div className="otp-field">
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength="1"
          />
        ))}
      </div>
    </div>
  );
}

export default OTPInput;
