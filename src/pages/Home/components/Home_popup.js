import React, { useState } from "react";
import "./Home_components.css";

function Home_popup() {
  const [popup, setPopup] = useState(true);
  const handleCloseBtn = () => {
    setPopup(false);
  };

  if (popup) {
    return (
      <div className="popup">
        <div className="popup_container">
          <p className="popup_title">Instruction:</p>
          <div className="popup_list">
            <p className="popup_listItem">
              - This is the demo of JB Hi-Fi Official Website
            </p>
            <p className="popup_listItem">
              - You can add items into your cart and can access cart from
              top-right corner of the page
            </p>
            <p className="popup_listItem">
              - You can also add items to wishlist. To check your wish list, you
              need to log in via your Google account, Github account or email -
              Authentication been provided
            </p>
          </div>
          <button className="popup_btn" onClick={() => handleCloseBtn()}>
            Yes, I got it!
          </button>
        </div>
      </div>
    );
  }
  return null;
}

export default Home_popup;
