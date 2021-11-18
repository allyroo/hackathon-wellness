import {Link} from 'react-router-dom';
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Pillars.css";
import exercise from "../components/images/exercise.svg";
import mental from "../components/images/mental.svg";
import relax from "../components/images/relax.svg";
import food from "../components/images/food.svg";

const PillarSelection = () => {
  return (
    <>
      <NavBar />
      <div className="pillar-container">
        <div className="nutrition-p">
          <div className="pill-img">
            <img src={food} />
          </div>
          <div className="pill">Nutrition</div>
        </div>
        <div className="fitness-p">
        <Link to="/dashboard/fitness">
          <div className="pill-img">
            <img src={exercise} />
          </div>
          </Link>
          <div className="pill">Fitness</div>
        </div>
        <div className="rest-p">
          <div className="pill-img">
            <img src={relax} />
          </div>
          <div className="pill">Rest</div>
        </div>
        <div className="mind-p">
        <Link to="/dashboard/mind">
          <div className="pill-img">
            <img src={mental} />
          </div>
        </Link>
          <div className="pill">Mind</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PillarSelection;
