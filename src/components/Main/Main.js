import React from 'react';
import "./Main.css";

const Main = props => (
  <main className={`${props.shake}`}>
      {props.children}
  </main>
)

export default Main;
