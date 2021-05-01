import React from "react";
import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationitems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/about">About Us</NavigationItem>
      <NavigationItem link="/terms">Our Terms</NavigationItem>
      <NavigationItem link="/offer">Our Offer</NavigationItem>
      {/* <NavigationItem>Login</NavigationItem>
      <NavigationItem>Signup</NavigationItem> */}
    </ul>
  );
};

export default navigationitems;
