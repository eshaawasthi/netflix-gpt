import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";

import { LOGO, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    authStateChanged();
  }, []);

  const authStateChanged = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        // User is signed in
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        console.error(error?.message || "Something went wrong!!");
      });
  };
  return (
    <div className="header-wrapper position-absolute">
      <img className="logo" src={LOGO} alt="logo" />
      {user && (
        <div className="m-2 p-2">
          <img src={USER_AVATAR} alt="avatar" className="" />
          <Button variant="none" className="text-white" onClick={handleSignOut}>
            Sign Out {user?.displayName}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
