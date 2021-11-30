import { Link } from "react-router-dom";
import whoweare from "../components/images/whoweare.png";
import dashboard from "../components/images/dashboard.jpg";
import branch from "../components/images/branch.png";
import mobile from "../components/images/mobile.jpg";
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
import { IoFlowerOutline } from "react-icons/io5";
import { NavLink, Button } from "reactstrap";
import "./Landing.css";
const Landing = () => {
  return (
    <div>
      <NavBar />
      <main className="hero-wrapper">
        {/* Hero */}
        <section className="hero">
          <div className="hero-overlay">
            <div className="hero-container">
              <div className="hero-left"></div>
              <div className="hero-right">
                <div className="hero-title">THE EMPOWERED YOU</div>

                <div className="hero-subtext">
                  Create a personalized plan to track
                  your&nbsp;pillars&nbsp;of&nbsp;wellness.
                </div>
                <NavLink href="/about">
                  <Button>Learn More</Button>
                </NavLink>
              </div>
            </div>
            <div className="main" id="section1">
              <a href="#section2" className="arrow-down">
                <IoIosArrowDown />
              </a>
            </div>
          </div>
        </section>
        {/* Who We Are */}
        <div className="main" id="section2">
          <a href="#section1"></a>
        </div>
        <section className="product">
          <div className="product-text">
            <div className="product-head">
              Your one-stop shop for improved wellness.
            </div>
            <br />
            <p>
              Holistic living isn't one size fits all. We want to be your
              resource to help you create a lifestyle that nourishes you as a
              whole.
            </p>
          </div>
          <div className="dash-girl">
            <img className="dash-img" src={dashboard} />
          </div>
        </section>
        {/* Second feature */}
        <section className="definition">
          <div className="mohala">mo•hala</div>
          <div className="mohala-sub">[mo-HAH-lah] Hawaiian</div>
          <div className="mohala-sub-def">
            • to unfold or blossom,
            like&nbsp;the&nbsp;petals&nbsp;of&nbsp;a&nbsp;flower&nbsp;would
            <br />• the metaphorical unfolding of an idea or initial plan which
            then evolves into a fully realized vision
          </div>
        </section>
        {/* Third feature */}
        <section className="product">
          <div className="product-img">
            <img className="mobile-img" src={mobile} />
          </div>
          <div className="product-text">
            <div className="product-head">
              Dig at the roots instead of hacking at the leaves.
            </div>
            <br />
            <p>
              We help you create a holistic lifestyle by approaching the pillars
              of your health that are interconnected.
            </p>
          </div>
        </section>
        <section className="how-to">
          {/* <div className="categories"> */}
          <div className="pillar">
            <div className="how-title">
              Dashboards built with your vision in mind.
            </div>
            <div className="pillar-img-container">
              <div className="pillar-column">
                <div className="pillar-circle">
                  <img src={tracker} className="pillar-img" />
                </div>
                <div className="how-subtitle">Track Progress</div>
                <div className="how-description">
                  We help you create life changing habits by setting up SMART
                  goals. Our dashboard gives you a visual look into your daily
                  goals that helps you to consciously work towards them.
                </div>
              </div>

              <div className="pillar-column">
                <div className="pillar-circle">
                  <img src={community} className="pillar-img" />
                </div>
                <div className="how-subtitle">Connect with Community</div>
                <div className="how-description">
                  We want to remind you that you are not alone. The power of
                  community to create wellness is far greater than any
                  physician, clinic, or hospital.
                </div>
              </div>

              <div className="pillar-column">
                <div className="pillar-circle">
                  <img src={support} className="pillar-img" />
                </div>
                <div className="how-subtitle">Find Local Resources</div>
                <div className="how-description">
                  We know that help is not a one-size-fits-all fit. We will
                  navigate local resources for you and help you find the best
                  fit to your needs to move forward.
                </div>
              </div>
            </div>
          </div>

          {/* <section className="bloom">
              <div className="title">
                Dig at the roots instead of hacking at the leaves.{" "}
              </div>
            </section> */}
        </section>
        {/* End Section */}
        <section className="tail">
          <div className="tail-title">
            <div className="tail-title-text">
              "The flower of health blooms when all parts work together."
            </div>
            <NavLink href="/signup">
              <Button className="button-class" outline>
                BLOOM TODAY
              </Button>
            </NavLink>
          </div>
          {/* <div className="tail-subtext">
              We help you create a holistic lifestyle by approaching all the four
              pillars (Mind, Nutrition, Physical, Rest) that are interconnected.{" "}
            </div> */}
        </section>
        <Footer />
      </main>
    </div>
  );
};
export default Landing;
