import React, { Component } from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Sidebar.module.scss";

class Sidebar extends Component {
  render() {
    let sidebarClasses = [classes.Sidebar];

    if (this.props.show) {
      sidebarClasses.push(classes.Open);
    }
    return (
      <div className={sidebarClasses.join(" ")}>
        <NavigationItems />
      </div>
    );
  }
}

export default Sidebar;
