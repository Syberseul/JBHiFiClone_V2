import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { auth, uiConfig } from "../../server/firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import "./account.css";
import { useEffect } from "react";

function Account({ userLogIn, userLogOut }) {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setSignedIn(!user);
    });
  }, [signedIn]);

  let user = auth.currentUser;
  if (user) userLogIn(user);

  return (
    <div className="account">
      {signedIn ? (
        <div className="account__loggedIn">
          <p>Hello: {user.displayName} !</p>
          <button
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
          <p>hello</p>
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