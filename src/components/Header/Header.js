import React from 'react';
import "./Header.css";
import Title from "../Title";
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Button from 'react-bootstrap/lib/Button';
// importing Layouts
import Row from "../Layout/Row";
import Column from "../Layout/Column";

const popoverLeft = (
  <Popover id="popover-positioned-left">
    <strong>Game Instructions</strong><br />
      Click on a celebrity to earn points, but don't select a character more than once!
  </Popover>
);

const Header = props => (
  <div className="jumbotron">
    <header className="header row">
      <div className="col-lg-3"></div>
        <div className="col-lg-6 text-center">
          <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
            <Button className="logo-button btn-dark">
              <img src="./assets/favImage/celebrityGameNight2.jpg" className="gameNight" alt="GameNight Logo"/>
            </Button>
          </OverlayTrigger>
        </div>
      <div className="col-lg-3"></div>
    </header>
    <Row>
      <Column size="lg-3">
        <div className="gif">
            <img alt="bradpitt" id="bradpitt-gif" src="./assets/gifs/bradpittevolve.gif" />
        </div>
      </Column>
      <Column size="lg-6">
        <Title />
      </Column>
      <Column size="lg-3">
        <div className="gif">
            <img alt="tomcruise" id="tomcruise-gif" src="./assets/gifs/tomcruise.gif" />
        </div>
      </Column>
    </Row>
  </div>
);

export default Header;