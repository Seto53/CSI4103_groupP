import "./styles/fligths.css"
import React from 'react';
import star from "./media/star.png"
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import {
    Box,
    CardContent
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

    export function Hotel({name,ranking,address}) {
        const classes = useStyles();
        const history = useNavigate();
          return (
            <div>
              <Box  className={classes.root}>
                  <div style={{opacity:"0.8",marginLeft:"1em",marginRight:"1em",maxHeight: "6em",minWidth:"50vw"}}>
                      <CardContent style={{textAlign: "left", display:"flex",maxHeight:"2em",minWidth:"90.5vw",borderStyle:"solid", borderWidth: "1px", borderLeft:"none", borderRight:"none",borderTop:"none"}}>
                          <div style={{margin:"0.5em",padding:"0.5em",minWidth:"30vw",color:"black",borderRightStyle:"solid",minHeight:"2vh"}}>{name}</div>
                          <div style={{margin:"0.5em",padding:"0.5em",minWidth:"30vw",color:"black",borderRightStyle:"solid",minHeight:"2vh"}}>{address}</div>
                          <div style={{margin:"0.5em",padding:"0.5em",minWidth:"10vw",color:"black"}}>
                            {Array.from({length: ranking}, (_, i) => <img src={star} alt="star" key={i} />)}
                          </div>

                          <Button style={{margin:"0.5em",padding:"0.5em",color:"white",minWidth:"10vw", background:"#1b458f",height:"30px"}} onClick={() => history("/bus")}>View in Maps</Button>
                      </CardContent>
                  </div>
              </Box>
            </div>
          )
}

export default Hotel;
