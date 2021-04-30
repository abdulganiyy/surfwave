import classes from "./Home.module.scss";
import React, { Component } from "react";
// import Carousel from "../../Components/Carousel/Carousel";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Plans from "../../Components/Plans/Plans";

class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <div className={classes.CarouselContainer}>
          {/* <Carousel /> */}
          <img
            src="https://nairametrics.com/wp-content/uploads/2020/10/Crypto-1.png"
            alt="hero"
          />
          <div className={classes.HeroContent}>
            <h1>Build your dream with passion</h1>
            <Link to="/about">Learn more</Link>
          </div>
        </div>
        <div className={classes.About}>
          <h2>About Us</h2>
          <div>
            We are a team of professionals creating a sustainable and reliable
            income generation platform through global trading system. We are
            creating an easy way to financial freedom for everybody from the
            comfort of your home.
          </div>
          <h2>Why Choose Us</h2>
          <div className={classes.WhyUs}>
            <article>
              <div>
                <h3>
                  Professionalism <br />
                  <span></span>
                </h3>
                we're a team of technical analyst that specializes in crypto &
                forex market
              </div>
              <img
                src="https://thumbs.dreamstime.com/b/professionalism-complex-like-puzzle-pictured-as-word-professionalism-puzzle-to-show-can-be-difficult-needs-164220036.jpg"
                alt="professionalism"
              />
            </article>
            <article>
              <div>
                <h3>
                  Integrity <br />
                  <span></span>
                </h3>
                Even when we face a critical situation, we will never compromise
                our values, principles and cultures. We do what satisfies the
                need of our clients even when there are other available options
              </div>
              <img
                src="https://cdn.etechgs.com/etechgs/wp-content/uploads/2014/06/Integrity-How-We-Live-When-No-One-Is-Watching.jpg"
                alt="integrity"
              />
            </article>
            <article>
              <div>
                <h3>
                  Quality <br />
                  <span></span>
                </h3>
                we strive for excellence in delivering services to our clients.
                We attract self motivated, highly capable, result oriented
                people who give their best performance
              </div>
              <img
                src="http://rehucap.com/wp-content/uploads/2020/05/quality.jpg"
                alt="quality"
              />
            </article>
          </div>
        </div>
        <Plans />
        <Footer />
      </div>
    );
  }
}

export default Home;
