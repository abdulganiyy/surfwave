import classes from "./Backdrop.module.scss";
import React, { Component } from "react";

class Backdrop extends Component {
  render() {
    let backdropClasses = [classes.Backdrop];

    if (this.props.show) {
      backdropClasses.push(classes.Open);
    }
    return (
      <div
        className={backdropClasses.join(" ")}
        onClick={this.props.clicked}
      ></div>
    );
  }
}

export default Backdrop;
