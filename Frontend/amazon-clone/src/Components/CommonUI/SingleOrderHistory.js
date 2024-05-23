import React from 'react'

import { useState, useEffect } from 'react';
import axios from 'axios';

import Loader from './Loader';
import SomethingWrong from './SomethingWrong';

const SingleOrderHistory = ({orderNumber}) => {

    const [history, setOrderHistory] = useState(null);    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate a delay of 1 second before fetching data
                setTimeout(async () => {
                    let response = await axios.get('http://localhost:8082/order-service/getOrderDetails/'+orderNumber);
                    setOrderHistory(response.data);
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



    // Without Loading ... 

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             let response = await axios.get('http://localhost:3001/orderHistory');
    //             setOrderHistory(response.data);
    //         } catch (error) {
    //             setError(error.message);
    //         }
    //     };
    
    //     fetchData();

        
    
    //     return () => {
    //         // Cleanup function
    //     };
    // }, []);



    if (error) {
        return <div>Error: {error}
  
        <SomethingWrong></SomethingWrong>
                
        
        </div>;
      }
    
      if (loading) {
        return (
            <div className="row my-2">
			<div className="col-md-12 ">
				<div className="card ">
				    <div className="card-body">
                        <div className="row d-flex justify-content-center">
                            
                        <i class='bx bx-loader bx-spin bx-lg text-danger' ></i>
                        </div>
				    </div>

				</div>
            </div>
        </div>


        );
      }



  return (
    <>

<div className="row my-2">
			<div className="col-md-12">
				<div className="card">
				    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-1 col-2 offset-md-1">
                                        <div className="section-title4">
                                            <i className="far fa-check-square fa-lg"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-10 col-10">
                                        <p className="section-title4 mb-0"> Delivered </p>
                                        {/* <p className="order-subtitle mt-0 mb-0">
                                            <a href="#">to 30/9 Radhika Nagar,Bhilai, Chhattisgarh</a>
                                        </p> */}
                                        {/* <p className="order-subtitle  mt-0">
                                            <a href="#">Send a return Request</a>
                                        </p> */}
                                         
                                    </div>
                                    <div className="col-md-12 offset-md-2  offset-2 my-2">
                                        <p className="section-title5"> Order Number </p>
                                        <p className="data-subtitle">
                                            {orderNumber}
                                        </p>
                                        
                                    </div>
                                    
                                    <div className="col-md-12  offset-md-2  offset-2 my-2">
                                        <p className="section-title5"> Delivered to </p>
                                        <p className="data-subtitle">
                                           {history.customerName} , {history.phoneNumber}
                                        </p>
                                
                                        <p className="data-subtitle">
                                        {`${history.addressLine1}, ${history.addressLine2}, ${history.city}, ${history.pinCode}`} 
                                        </p>

                                        {/* <p className="data-subtitle">
                                        {`${history.landmark}`} 
                                        </p> */}
                                        
                                        
                                    </div>  


                                    {/* <div className="col-md-12  offset-md-2  offset-2 my-2">
                                        <p className="section-title5"> Delivered On </p>
                                        <p className="data-subtitle">
                                            25 th July, 2019
                                        </p>
                                        
                                    </div> */}

                                    <div className="col-md-12  offset-md-2  offset-2 my-2">
                                        <p className="section-title5 mb-3"> Total: </p>
                                        <span className="data-subtitle bg-warning px-3 py-2 ">
                                        ₹ {history.orderTotal}
                                        </span>
                                        
                                    </div>  


                                </div>
                                
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="data-subtitle mb-3">Products Purchased </p>
                                        
                                    </div>
                                </div>

                                {history.orderedProductList.map((product, index) => (
                                    <div key={index} className="centered-row mb-2">
                                    <div className="col-md-2 col-2">
                                        <div className="double-div">
                                        <img src={product.imageUrl} className="products-purchased" alt={product.productName} />
                                        <div className="products-number">{product.quantity}</div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <p className="data-subtitle">{product.productName}</p>
                                    </div>
                                    <div className="col-md-3 col-3">
                                        <p className="data-subtitle">₹{product.price}</p>
                                    </div>
                                    </div>
                                ))}

                               

                            </div>

                        </div>
				    </div>

				</div>
            </div>
        </div>

    </>
  )
}

export default SingleOrderHistory;