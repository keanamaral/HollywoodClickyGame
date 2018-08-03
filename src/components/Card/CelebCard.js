import React from "react";
import "./CelebCard.css";

const CelebCard = props => (
  <div className="card">
    <div className="img-container">
      <a onClick={() => { props.increment(props.id); props.shuffle(props.id); }} 
          className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}>
        <img alt={props.name} src={props.image}/>
      </a>    
    </div>
  </div>
)

export default CelebCard;