import React from "react";
import "./Sidebar.css";

export default function Backdrop(props) {
  return (<div className="overlay" onClick={props.click}></div>);
}
