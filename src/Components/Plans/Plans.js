import React, { Component } from "react";
import "./Plans.scss";
import Button from "../../Components/UI/Button/Button";

class Plans extends Component {
  render() {
    return (
      <div className="planswrap">
        <h2>Our Trading Packages</h2>
        <div className="plans">
          <div className="plan">
            <img
              src="https://thetradable.com/image/728/0/aPCzSkiT0xgNVnaJT490gxI7assGjd9iPI8wOfoP.jpeg"
              alt="basic"
            />
            <h3>BASIC</h3>
            <span></span>
            <h3>$600</h3>
            <p>
              This plan provides a flexible payment plan which allows you to
              make an initial payment of $300 and completing the payment after
              making profit from our first trading signal
            </p>
            <a href="https://paystack.com/pay/ilvu35scjq">
              <Button>Enroll Now</Button>
            </a>
          </div>
          <div className="plan">
            <img
              src="https://scholarlyoa.com/wp-content/uploads/2019/12/trade.jpg"
              alt="basic"
            />
            <h3>EXECUTIVE</h3>
            <span></span>
            <h3>$1000</h3>
            <p>
              This plan provides a flexible payment plan which allows you to
              make an initial payment of $500 and completing the payment after
              making profit from our first trading signal
            </p>
            <a href="https://paystack.com/pay/vkln0b-wbd">
              <Button>Enroll Now </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Plans;

// const plan1src =
//   "https://www.youngreaderslibrary.org.ng/wp-content/uploads/2020/04/basic.png";
