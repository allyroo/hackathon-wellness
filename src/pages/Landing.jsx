import { Link } from "react-router-dom";
import whoweare from "../components/images/whoweare.png";
import dashboard from "../components/images/dashboard.jpg";
import exercise from "../components/images/exercise.svg";
import mental from "../components/images/mental.svg";
import relax from "../components/images/relax.svg";
import food from "../components/images/food.svg";
import community from "../components/images/community.svg";
import tracker from "../components/images/tracker.svg";
import support from "../components/images/support.svg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, Button } from "reactstrap";

import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <NavBar />

      <div style={{ textAlign: "center" }}>
        {/* Hero */}
        <section className="hero">
          <div className="hero-overlay">
            <div className="hero-title">LIVE AN EMPOWERED LIFE</div>
            <div className="hero-subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <NavLink href="/about">
              <Button>Learn More</Button>
            </NavLink>
            <div className="main" id="section1">
              <a href="#section2">
                World
                <IoIosArrowDown />
                Hello
              </a>
            </div>
          </div>
        </section>
        {/* breaker bloom text */}
        <section className="bloom">
          <div className="title">
            sprout with us. bloom with us. thrive with us.{" "}
          </div>
        </section>
        {/* Who We Are */}
        <section className="product">
          <div className="product-text">
            <div className="product-head">
              Your one-stop shop for better mental health.
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="product-img">
            <img className="dash-img" src={dashboard} />
          </div>
        </section>
        <section className="bloom">
          <div className="title">
            Dig at the roots instead of hacking at the leaves.{" "}
          </div>
          <div className="main" id="section2">
            <a href="#section1">Hello</a>
          </div>
        </section>
        <section className="how-to">
          {/* <div className="categories"> */}

          <div className="pillar">
            <div className="how-title">Choose a pillar</div>
            <div className="pillar-img-container">
              <div className="box1">
                <div className="pillar-img">
                  <img src={food} />
                </div>
              </div>
              <div className="box1">
                <div className="pillar-img">
                  <img src={exercise} />
                </div>
              </div>
              <div className="box1">
                <div className="pillar-img">
                  <img src={relax} />
                </div>
              </div>
              <div className="box1">
                <div className="pillar-img">
                  <img src={mental} />
                </div>
              </div>
            </div>
          </div>
          <div className="track">
            <div className="how-title">Track your progress</div>
            <img src={tracker} />
          </div>
          <div className="community">
            <div className="how-title">Connect with the community</div>
            <img src={community} />
          </div>
          <div className="provider">
            <div className="how-title">Lean on the professionals</div>
            <img src={support} />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
