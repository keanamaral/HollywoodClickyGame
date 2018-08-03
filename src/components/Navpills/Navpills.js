import React from "react";
import "./Navpills.css";

const Navpills = props => (
  <nav>
    <ul className="nav nav-pills nav-justified">
      <li>
        <button className={`btn btn-link ${props.volumeOn}`} onClick = {() => { props.volume(); }}>
          <i className={`fas fa-volume-up fa-4x volume-icon`}></i>
        </button>
        <button className={`btn btn-link`} onClick = {() => { props.volume(); }}>
          <i className={"fas fa-volume-off fa-4x volume-icon"}></i>
        </button>
      </li>
      <li className="navTitle"><a href="/HollywoodClickyGame">HOLLYWOOD CLICKY GAME</a></li>
      <li  className={props.message1.indexOf('WRONG') !== -1 ? "desc-incorrect" : props.message2.indexOf('correctly') !== -1 ? "desc-correct" : "desc-normal"}
      >
        <span>{props.message1}</span> {props.message2}
      </li>
      <li>
        Score: <span style={{color: "yellow"}}>{props.curScore}</span> | Top Score: <span className={props.message2.indexOf('correctly') !== -1 ? "desc-correct" : "desc-normal"}>{props.topScore}</span>
      </li>
    </ul>
  </nav>
);

export default Navpills;