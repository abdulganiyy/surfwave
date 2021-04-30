import classes from "./About.module.scss";
import React, { Component } from "react";
import Footer from "../../Components/Footer/Footer";
import img1 from "../../images/Aji.jpg";
import img2 from "../../images/Awwal.jpg";
import img3 from "../../images/Ayo.jpg";
import img4 from "../../images/Abdul.jpg";

class About extends Component {
  render() {
    return (
      <>
        <div className={classes.Wrapper}>
          <div className={classes.About}>
            <h2>About Us</h2>
            <img
              src="https://element502.com/wp-content/uploads/2017/01/about-post.jpg"
              alt="aboutus"
            />
            <p>
              We are a team of professionals creating a sustainable and reliable
              income generation platform through global trading system. We are
              creating an easy way to financial freedom for everybody from the
              comfort of your home.
            </p>
          </div>
          <div className={classes.TeamsWrap}>
            <h2>Meet The Team</h2>
            <div className={classes.Teams}>
              <div>
                <img src={img1} alt="founder" />
                <h1>Ajisegiri Temitope</h1>
                <p>CEO & Founder</p>
              </div>
              <div>
                <img src={img3} alt="analyst" />
                <h1>Adelowo Ayodeji</h1>
                <p>Administrator</p>
              </div>
              <div>
                <img src={img2} alt="salesman" />
                <h1>Adewale Awwal</h1>
                <p>Analyst & Trainer</p>
              </div>
              <div>
                <img src={img4} alt="developer" />
                <h1>Lasisi-Balogun</h1>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
          <div className={classes.TestimonialsWrap}>
            <h2>What People Are Saying</h2>
            <div className={classes.Testimonials}>
              <div className={classes.Testimonial}>
                <div className={classes.TestimonialBody}>
                  <div>
                    <i className="fas fa-quote-left"></i>
                  </div>

                  <p>
                    Mr Ajisegiri is an amazing tutor and personality, delivering
                    topnotch and relevant trading education. He is professional,
                    highly available and delivers on his promises to make his
                    students achieve their trading goals - an all around
                    pleasure to work with!
                  </p>
                  <div className={classes.Right}>
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
                <div className={classes.TestimonialFooter}>
                  <img
                    src="https://randomuser.me/api/portraits/women/30.jpg"
                    alt="user"
                  />
                  <h3>Mrs Damaris</h3>
                  <h4>HAZ Clothings</h4>
                </div>
              </div>
              <div className={classes.Testimonial}>
                <div className={classes.TestimonialBody}>
                  <div>
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p>
                    Working with surfwave global has been an amazing journey.
                    They are professionals, helping individuals achieve
                    financial freedom. They are involved in every process and
                    its been a wonderful experience.
                  </p>
                  <div className={classes.Right}>
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
                <div className={classes.TestimonialFooter}>
                  <img
                    src="https://randomuser.me/api/portraits/men/80.jpg"
                    alt="user"
                  />
                  <h3>Engineer Adekola</h3>
                  <h4>JJ Constructions</h4>
                </div>
              </div>
              <div className={classes.Testimonial}>
                <div className={classes.TestimonialBody}>
                  <div>
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p>
                    I was skeptical at first to learn from surfwave global but
                    with the results being achieved by students of surfwave
                    global, I gave it a shot and I can confidently promote them
                    now.
                  </p>
                  <div className={classes.Right}>
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
                <div className={classes.TestimonialFooter}>
                  <img
                    src="https://randomuser.me/api/portraits/men/91.jpg"
                    alt="user"
                  />
                  <h3>Mr Lateef</h3>
                  <h4>Pixels Holdings</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;
