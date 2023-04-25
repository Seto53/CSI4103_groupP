import React from "react";
import './styles/Popup.css';
import { useNavigate } from "react-router-dom";

import {Card,CardContent} from "@material-ui/core";
import {createStyles, makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";

export const popupTitle = {
  incorrect: "Incorrect",
  multipleIncorrect: "Some of the selected answers may not be correct. Try again.",
  noAnswerSelected: "No Answer Selected",
  unansweredQuestions: "Attention! Some Questions Not Answered",
};
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(3),
        },
        },
    }));

export const Popup = (props) => {
  const title = props.title;
  const content = props.content;
  const ETA = props.ETA;
  const from = props.from;
  const to = props.to;
  const hotels = props.hotels
  const departed = props.departure_time;
  const status = props.status;
  const history = useNavigate();

  function arrayToString(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
      let obj = array[i];
      let objString = JSON.stringify(obj);
      string += objString;
      if (i < array.length - 1) {
        string += ",";
      }
    }
    return string;
  }
function getDetails(hotels){
const path = JSON.stringify(hotels)
console.log(path)
history("/hotels")
}

  const multipleMessages = title === popupTitle.multipleIncorrect;
  const displayTitle = title;
  const displayContent = multipleMessages ? content?.map((message, i) => <div className="PopupTitle" key={i}>{message}<p></p></div>) : content;

  return (
    <div className="popup-overlay">
      {console.log(status)}
        <div className="popup-box" style={{paddingLeft:"5em"}}>
        <Card style={{background:"#ffeedb"}}>
            <b className="popup-title ">{displayTitle}</b>
            <div className="popup-title ">{displayContent}</div>
            <CardContent className="float-container" style={{textAlign: "left"}}>
              <Card>
                <CardContent>
                  <div className="popup-close-icon" onClick={props.handleClose} cyp={`popup-close`}>x</div>
                  <div>From: {from}</div>
                  <div>To: {to}</div>
                  <div>Departed: {departed}</div>
                  {status && <div>Landed: <text style={{color:"green"}} >YES</text> </div>}
                  {!status && <div>Landed: <text style={{color:"red"}}>NO</text> </div>}
                  <div>ETA: {ETA}</div>
                  <br></br>
                  <Button style={{background:"orange", color:"black"}} onClick={()=> getDetails({hotels})}>View Hotels to Destination</Button>
                </CardContent>
              </Card>
            </CardContent>

      </Card>
            </div>
    </div>
  );
}
