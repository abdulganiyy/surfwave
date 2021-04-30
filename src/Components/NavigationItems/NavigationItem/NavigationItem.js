import React from "react";
import classes from "./NavigationItem.module.scss";
import { Link } from "react-router-dom";

const navigationitem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <Link to={props.link}>{props.children}</Link>
    </li>
  );
};

export default navigationitem;
