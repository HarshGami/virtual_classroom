import './signin.css'
import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  return (
    <div className='sign'>
      <div className="sign__container">
        <h2>Virtual-Classroom</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png"
          alt="Google Classroom Image"
          className="sign__image"
        />
        <br/>
        <h4>sign in</h4>
        <h4>using google</h4>
        <button className='sign__button' onClick={handleGoogleSignIn} >Sign in</button>
      </div>
    </div>
  );
};

export default Signin;
