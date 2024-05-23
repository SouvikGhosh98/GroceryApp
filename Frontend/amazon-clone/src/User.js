import React from 'react'
import "./User.css";
import OrderHistory from './Components/CommonUI/OrderHistory';

import { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../src/Components/CommonUI/Loader";
import SomethingWrong from "../src/Components/CommonUI/SomethingWrong";
import { useUserIdContext } from "./Context/UserIdContext";

function User() {


    // const [viewHistory, setViewHistory] = useState(false);
//   const [orderno, setOrderNo] = useState(null);
  const [historyList,setHistoryList] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const {userId} = useUserIdContext();

//   const handleView = (param) => {
//     setViewHistory(!viewHistory); // Toggle the state
//     setOrderNo(param);
//   };


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate a delay of 1 second before fetching data
                setTimeout(async () => {
                    let response = await axios.get('http://localhost:8082/order-service/getAllOrders/'+userId);
                    console.log(response.data)
                    setHistoryList(response.data);
                    setLoading(false); // Set loading to false after data is fetched
                }, 1000);
            } catch (error) {
                setError(error.message);
                setLoading(false); // Set loading to false if there's an error
            }
        };
    
        fetchData();
    
        return () => {
            // Cleanup function
        };
    }, []);
    
    
    console.log(historyList)
    
    if (error) {
        return <div>Error: {error}
    
        <SomethingWrong></SomethingWrong>
                
        
        </div>;
      }
    
      if (loading) {
        return <Loader></Loader>;
      }



  return (
    <>

<div className="body">

{/* <div className="profile_info">
    <div className="info">
        <span className="main_span">Rishabh Rai</span>
        <span className="secondary_span">Bhilai,IND</span>
    </div>
    <div className="sign_out">Sign Out</div>
</div> */}

<div className="content">

    <div className="left_menu">
        <div className="left_navigator">
            <div className="list">Profile</div>
            <div className="list">Orders</div>
            <div className="list">Address</div>
            <div className="list">Payment</div>
            <div className="list">Whishlist</div>
        </div>
    </div>

    <div className="right_menu">



        <div className="row">
                <div className="col-md-12">
                    <p className="section-title">Order History</p>
                    
                </div>
        </div>

        {historyList.map((historyItem, index) => (
            <OrderHistory key={index} orderNumber={historyItem.id} singleOrderData={historyItem} />
          ))}


        {/* <div class="page_nav">
            <div className="page_no">1</div>
            <div className="page_no">2</div>
            <div className="page_no">3</div>
            <div className="page_no">4</div>
        </div> */}
    </div>

</div>
</div>
    </>
  )
}

export default User;