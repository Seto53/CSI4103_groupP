import "./styles/home.css";
import { useNavigate } from "react-router-dom";
import background from "./media/homepage.png";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import React, { useState } from 'react';

import { Button } from "@material-ui/core";

export function Home() {
  const history = useNavigate();

  function viewAllLive() {
    history("/flights");
  }
    return (
      <div className="bgg">
        <div className="content">
          <div className="home-text">
            <b>
              Planning your next trip <br className="home-text" />  to Ottawa?<br className="home-text" />
              {" "}
            </b>
          </div>
          <b style={{ paddingRight: "0em"}}>
            <Button variant="contained" color="default" startIcon={<DoubleArrowIcon />} className="butt" style={{top:"1em", opacity: "0.8",color:"#00A291"}} onClick={viewAllLive}>get started </Button>
          </b>
          <div></div>
        </div>
      </div>
    );
}
export default Home;
