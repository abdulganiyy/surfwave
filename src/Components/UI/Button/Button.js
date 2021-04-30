import classes from "./Button.module.scss";
import React from "react";

const button = (props) => {
  return <button className={classes.Button}>{props.children}</button>;
};

export default button;
