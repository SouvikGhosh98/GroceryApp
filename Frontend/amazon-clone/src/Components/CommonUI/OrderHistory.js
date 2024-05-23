import React from "react";
import "./OrderHistory.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Loader from "./Loader";
import SomethingWrong from "./SomethingWrong";
import SingleOrderHistory from "./SingleOrderHistory";

const OrderHistory = ({orderNumber,singleOrderData}) => {
  const [viewHistory, setViewHistory] = useState(false);
  const [orderno, setOrderNo] = useState(null);

  const handleView = (param) => {
    setViewHistory(!viewHistory); // Toggle the state
    setOrderNo(param);
  };


  return (
    <>
      <div>
        <div class="row my-2">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4 text-left">
                    <p class="num-product"> Order Id : {singleOrderData.id}</p>
                    <p>
                      Total :
                      <span className="data-subtitle bg-warning px-1 py-1 ">
                        ₹ {singleOrderData.orderTotal}
                      </span>
                    </p>
                  </div>
                  <div class="col-md-6 text-center">
                    <p class="deli-product">
                      <i class="far fa-check-square fa-lg mx-1"></i>
                      Delivered: {singleOrderData.orderDate}
                    </p>
                  </div>
                  <div class="col-md-2 text-center">
                    {viewHistory === false ? (
                      <p class="view-product">
                        <button
                          type="button"
                          className="button"
                          onClick={() => handleView(singleOrderData.id)}
                        >
                          {" "}
                          View{" "}
                        </button>
                      </p>
                    ) : (
                      <p class="view-product">
                        <button
                          type="button"
                          className="button"
                          onClick={() => handleView("")}
                        >
                          {" "}
                          Close{" "}
                        </button>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {viewHistory && (
          <SingleOrderHistory orderNumber={orderno}></SingleOrderHistory>
        )}
      </div>
    </>
  );
};

export default OrderHistory;