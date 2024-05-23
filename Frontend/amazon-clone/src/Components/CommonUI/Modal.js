import React, { useEffect, useState } from "react";
import "./Modal.css";

import Login from "./Login";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {/* <span className="close" onClick={closeModal}>&times;</span> */}
        <div className="close-icon-container">
          <i className="bx bx-x close" onClick={closeModal}></i>
        </div>

        <div className="modal-container">
          <Login></Login>
        </div>
      </div>
    </div>
  );
};

export default Modal;
