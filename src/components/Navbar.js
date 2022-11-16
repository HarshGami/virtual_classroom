import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar_ = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png"
            alt="Google Classroom Image"
            className="navbar__logo"
          />
          <span>Virtual-Classroom</span>
        </div>
        <div className="navbar__right">
          {user?.displayName ? (
            <button className="navbar__button" onClick={handleSignOut}>Logout</button>
          ) : (
            <Link className="navbar__button" to="/signin">Sign in</Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar_;
