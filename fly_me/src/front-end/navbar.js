import "./styles/navbar.css"
import React from 'react';
//import igLogo from "./images/ig.png"
export function NavigationBar(props) {
  return (
    <nav>
        <div className="flex-container">
            <div className="column1">{props.title}</div>
            <div className="column2">
              <a href="\" className="column2">
                Home
              </a>
            </div>
            <div className="column2">
              <a href="\flights" className="column2">
                Flights
              </a>
            </div>
            <div className="column2" style={{paddingLeft:"2em"}}>
              <a href="\hotels" className="column2">
                Hotels
              </a>
            </div>
            <div className="column3" style={{paddingLeft:"1.5em", fontSize:"larger"}}>
              <a href="\bus" className="column2">
                Bus
              </a>
            </div>
            <div className="column4" style={{fontSize:"larger"}}>
              <a href="\about" className="column2">
                About
              </a>
            </div>
        </div>
    </nav>
  )
}

export default NavigationBar;