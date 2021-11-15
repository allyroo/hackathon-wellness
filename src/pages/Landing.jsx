import { Link } from "react-router-dom";
import whoweare from "../components/images/whoweare.png";
import pillars from "../components/images/pillars.jpeg";
import NavBar from "../components/NavBar";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <NavBar />

      <div style={{ textAlign: "center", margin: "50px" }}>
        <h1>LANDING PAGE WOOOO</h1>
        {/* Hero */}
        <section className="hero">
          <div className="hero-overlay">
            <h1>Header</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
        {/* Who We Are */}
        <section className="who-we-are">
          <div className="who-text">
            <h1>Who we are</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="who-img">
            <img src={whoweare} />
          </div>
        </section>
        {/* Pillars of Health */}
        <section className="pillars">
          <div className="pillars-overlay">
            <h1>Pillars of Health</h1>
            <div className="categories">
              <div>
                <h3>Nutrition</h3>
                <img src={whoweare} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h3>Movement</h3>
                <img src={whoweare} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h3>Sleep</h3>
                <img src={whoweare} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h3>Relaxation</h3>
                <img src={whoweare} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Habit tracking */}
        <section className="habits">
          <div className="who-text">
            <h1>Who we are</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="who-img">
            <img src={whoweare} />
          </div>
        </section>
        Hello world
        <nav>
          <Link to="/">Home</Link> | <Link to="signup">Signup</Link>
        </nav>
      </div>
    </div>
  );
};

export default Landing;
