import React, { Component } from "react";
import classes from "./Toolbar.module.scss";
import NavigationItems from "../NavigationItems/NavigationItems";
import { Link } from "react-router-dom";

import Logo from "../../images/logowhite.jpg";

class Toolbar extends Component {
  render() {
    return (
      <div className={classes.Toolbar}>
        <div className={classes.Logo}>
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          </Link>
        </div>
        <div className={classes.Icon} onClick={this.props.clicked}>
          <i class="fas fa-align-justify"></i>
        </div>
        <div className={classes.Nav}>
          <NavigationItems />
        </div>
      </div>
    );
  }
}

export default Toolbar;
