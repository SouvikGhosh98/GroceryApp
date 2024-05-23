import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import User from "./User";
import ProductDescription from "./ProductDescription";
import DeliveryPayment from "./DeliveryPayment";
import AddressForm from "./AddressForm";

import Footer from "./Footer";

function App() {
  const [subTotal, setSubTotal] = useState();
  const [orderStatus, setOrderStatus] = useState(0);

  const handleSubTotal = (price) => {
    setSubTotal(price);
    console.timeLog(price);
  };

  const handleOrderStatus = (status) => {
    setOrderStatus(status);
  }

return (
  
  
    <Router>
      <div className="app">
      <Header />

      <Switch>

      <Route path="/user">  
          <User />
        </Route>


        <Route path="/checkout" >  
          <Checkout handleSTotal={handleSubTotal} orderStatus={orderStatus} handleStatus={handleOrderStatus}/>
        </Route>

        <Route path="/productdescription">  
          <ProductDescription />
        </Route>

        <Route path="/paymentoptions">  
          <DeliveryPayment subTotal={subTotal} handleStatus={handleOrderStatus}/>
        </Route>

        <Route path="/addressform">  
          <AddressForm subTotal={subTotal}/>
        </Route>

        <Route path="/" > 

          <Home />
        </Route>

      </Switch>
      
      <Footer></Footer>
      </div>
    </Router>
  
);
}
export default App;