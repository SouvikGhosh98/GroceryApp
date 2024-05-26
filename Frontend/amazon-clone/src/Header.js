import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import PlaceIcon from '@mui/icons-material/Place';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from "./Components/CommonUI/Modal";
import { useUserIdContext } from "./Context/UserIdContext";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [{ basket, user }, dispatch] = useStateValue();
  const { userId, getUserId } = useUserIdContext();
  const history = useHistory();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    // Clear the user context
    getUserId(0);
    // Navigate to the home or login page
    history.push("/");
    setShowModal(false);
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__nav">
        <PlaceIcon className="header__PlaceIcon"/>
      </div>

      <div className="header__nav">
        {userId > 0 && (
          <>
            <Link to="/user" style={{ textDecoration: "none" }}>
              <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
              </div>
            </Link>
            <div className="header__option" onClick={handleLogout}>
              <span className="header__optionLineOne">Hello User</span>
              <span className="header__optionLineTwo">Logout</span>
            </div>
          </>
        )}

        {userId === 0 && (
          <div className="header__option">
            {showModal && <Modal closeModal={closeModal} />}
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo" onClick={openModal}>Sign in</span>
          </div>
        )}

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        {userId > 0 && (
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartIcon />
              <span className="header__optionLineTwo header__basketCount">
                {/* {basket?.length} */}
              </span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;