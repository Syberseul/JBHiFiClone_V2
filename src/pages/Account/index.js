import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { auth, uiConfig } from "../../server/firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import { Link } from "react-router-dom";
import "./account.css";

function Account({ userLogIn, userLogOut }) {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setSignedIn(!!user);
    });
  }, [signedIn]);

  let user = auth.currentUser;
  if (user) userLogIn(user);

  return (
    <div className="account">
      {signedIn ? (
        <div className="account__loggedIn">
          <p>Hello: {user.displayName} !</p>
          <Link to="/">
            <button className="account__button">Go to shopping</button>
          </Link>
          <Link to="/wishList">
            <button className="account__button">Check your wish list</button>
          </Link>
          <button
            className="account__button"
            onClick={() => {
              auth.signOut();
              userLogOut();
            }}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      )}
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  userLogIn(user) {
    dispatch(actionCreators.userLogin(user));
  },
  userLogOut() {
    dispatch(actionCreators.userLogout());
  },
});

export default connect(null, mapDispatch)(Account);
