import React from "react";
import classes from "./Card.module.css";
export default function Card(Props) {
  return <div className={classes.card}>{Props.children}</div>;
}
