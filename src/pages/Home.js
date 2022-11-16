import "./home.css";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png"
            alt="Google Classroom Image"
            className="home__image"
          />
        </div>
        <div className="home__container">
            <span><b>Where teaching and learning come together</b></span> <b>Virtual-Classroom is your
            all-in-one place for teaching and learning. Our easy-to-use and
            secure tool helps educators manage, measure, and enrich learning
            experiences.</b>
        </div>
      </div>
    </div>
  );
};

export default Home;
