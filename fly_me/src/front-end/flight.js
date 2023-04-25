import "./styles/fligths.css"
import React from 'react';
import { useState, useEffect } from "react";
import { Popup } from "./popup";
import {
    Box,
    CardContent,
    Button
  } from "@material-ui/core";
  import {createStyles, makeStyles } from "@material-ui/core/styles";
  const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0),
        },
        },
    }));

    export function Flight({fl}) {
      const [Flig, setF] = useState([{},{}]);
      const [showPopup, setShowPopup] = useState([false,false]);
        const classes = useStyles();
        function turnToTrue(array) {
          for (let i = 0; i < array.length; i++) {
            array[i] = true;
          }
          return array;
        }
        function setToObject(array, obj) {
          for (let i = 0; i < array.length; i++) {
            array[i] = obj;
          }
          return array;
        }
        const getDetails=(x)=>{
          let pp = [...showPopup]
          let xx = [...Flig]
          xx = setToObject(xx,x)
          pp = turnToTrue(pp)
          setShowPopup(pp)
          setF(xx)
        }
          return (
            <div>
              <Box  className={classes.root}>
                      <CardContent style={{textAlign: "left", display:"flex",borderStyle:"solid", borderWidth: "0.5px", width:"100%", borderLeftColor:"#a9a9a9", borderRightColor:"#a9a9a9"}}>
                          <div style={{margin:"0.5em",padding:"0.5em",color:"black",minWidth:"15.5vw",borderRightStyle:"solid"}}>{fl.departure}</div>
                          <div style={{margin:"0.5em",padding:"0.5em",color:"black",minWidth:"15.2vw",borderRightStyle:"solid"}}>{fl.arrival}</div>
                          <div style={{margin:"0.5em",padding:"0.5em",color:"black",minWidth:"15.2vw",borderRightStyle:"solid"}}>{fl.airline}</div>
                          <div style={{margin:"0.5em",padding:"0.5em",color:"black",minWidth:"15.1vw",borderRightStyle:"solid"}}>{fl.number}</div>
                          <Button style={{margin:"0.5em",padding:"0.5em",color:"white",minWidth:"15vw", background:"#1b458f"}} onClick={() => getDetails(fl)}>View Details</Button>
                      </CardContent>
              </Box>
              {showPopup[0] && <Popup title="Flight details" departure_time={fl.departure_time} status={fl.status} from={fl.departure} to={fl.arrival} ETA={fl.ETA} hotels={fl.hotels} handleClose={() => setShowPopup([false,false])}/>}
            </div>
          )
}
      
export default Flight;