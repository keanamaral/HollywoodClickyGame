import React from 'react';
import "./Score.css";
import Column from "../Layout/Column";

const Score = props => (
  <div>
    <Column size="lg-6">
      <button id={props.shake} className={`btn btn-block btn-score btn-${props.alertType}`}>
        <h3>Score <span className="badge">{props.score}</span></h3>
      </button>
    </Column>
    <Column size="lg-6">
      <button className={`btn btn-block btn-score btn-${props.topScoreType}`}>
        <h3>Top Score <span className="badge">{props.topScore}</span></h3>
      </button>
    </Column>
  </div>
)

export default Score;