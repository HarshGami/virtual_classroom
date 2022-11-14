import "./home.css";
import React, { useEffect } from "react";

import {app, auth, db, signInWithGoogle ,logout} from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png"
          alt="Google Classroom Image"
          className="home__image"
        />
        <button className="home__login"  onClick={signInWithGoogle}>Login with Google</button>
      </div>
    </div>
  );
}

export default Home;
