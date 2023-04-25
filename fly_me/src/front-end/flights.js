import "./styles/fligths.css";
import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import {Card,CardContent} from "@material-ui/core";
import {createStyles, makeStyles } from "@material-ui/core/styles";
import Flight from "./flight";
import { db } from "../firebase";
import "firebase/firestore"
import { Popup } from "./popup";
import { Button } from "@mui/material";

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

export function Flights() {

  const [Data, setData] = useState([]);
  const [DataCopy,setDataCopy] = useState([]);
  const [Flig, setF] = useState([{},{}]);
  const [showPopup, setShowPopup] = useState([false,false]);
  const [sortNumber, setSortNumber] = useState(false)
  const [sortDeparture, setSortDeparture] = useState(false)
  const [sortAirline, setSortAirline] = useState(false)
  const [sortArrival, setSortArrival] = useState(false)


  //get data
  useEffect(()=>{
    try{
    const flights = []
    db.collection("flights2").get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
            flights.push(doc.data())
        });
        // res.json({data:flights})
        setData(flights);
        setDataCopy(flights);
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    }
    catch{
      //error page
    }
  },[])

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
function sortByDeparture(arr){
  if(sortDeparture){
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j].departure.toLowerCase() < arr[j + 1].departure.toLowerCase()) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
    }
    setSortDeparture(!sortDeparture)
    return arr;
  }
  else{
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j].departure.toLowerCase() > arr[j + 1].departure.toLowerCase()) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
    }
    setSortDeparture(!sortDeparture)
    return arr;
  }
}
function sortByFlightN(arr){
  if(sortNumber){
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j].number.toLowerCase() < arr[j + 1].number.toLowerCase()) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
    }
    setSortNumber(!sortNumber)
    return arr;
  }
  else{
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j].number.toLowerCase() > arr[j + 1].number.toLowerCase()) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
    }
    setSortNumber(!sortNumber)
    return arr;
  }
}

function sortByArr(arr){
  if(sortArrival){
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j].arrival.toLowerCase() < arr[j + 1].arrival.toLowerCase()) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
    }
    setSortArrival(!sortArrival)
    return arr;
  }
  else{
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j].arrival.toLowerCase() > arr[j + 1].arrival.toLowerCase()) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
    }
    setSortArrival(!sortArrival)
    return arr;
  }
}

function sortByAir(arr){
  if(sortAirline){
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j].airline.toLowerCase() < arr[j + 1].airline.toLowerCase()) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
    }
    setSortAirline(!sortAirline)
    return arr;
  }
  else{
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j].airline.toLowerCase() > arr[j + 1].airline.toLowerCase()) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
    }
    setSortAirline(!sortAirline)
    return arr;
  }
}

function filterByFlightDeparture(flightsArray, substring) {
  const lowerCaseSubstring = substring.toLowerCase();
  return flightsArray.filter(flight => {
    const lowerCaseFlightNumber = flight.departure.toLowerCase();
    return lowerCaseFlightNumber.includes(lowerCaseSubstring);
  });
}

function searchFN(){
  console.log("search")
  const flightSearch = document.getElementById('flight-search');
  const searchValue = flightSearch.value;
  let deps = [...DataCopy]
  deps = filterByFlightDeparture(deps,searchValue)
  setData(deps)
}

  function sortDep(){
    let deps = [...Data]
    deps = sortByDeparture(deps)
    setData(deps)
  }
  function sortFn(){
    let fns = [...Data]
    fns = sortByFlightN(fns)
    setData(fns)
  }
  function sortArr(){
    let fns = [...Data]
    fns = sortByArr(fns)
    setData(fns)
  }
  function sortAir(){
    let fns = [...Data]
    fns = sortByAir(fns)
    setData(fns)
  }
    return (
      <div style={{backgroundColor:"rgb(211, 211, 211)", height:"100vh", width:"100%"}}>
        <div className="content2">
            <h2 style={{textAlign: "center", fontSize: "2em"}}>Flights</h2>
            <Card style={{background: "black" , maxHeight:"35em"}}>
            <Card style={{opacity:"0.8",maxHeight: "6em",minWidth:"50em", color:"black",background:"#00a291"}}>
              Sort by:
                      <CardContent className="float-container" style={{textAlign: "center", display:"flex",background:"#00a291"}}>
                          <div className="float-child" onClick={() => sortDep()}>Departure</div>
                          <div className="float-child" onClick={() => sortArr()}>Arrival</div>
                          <div className="float-child" onClick={() => sortAir()}>Airline</div>
                          <div className="float-child" onClick={() => sortFn()}>Flight #</div>
                          <div className="searchgo" onClick={()=> searchFN()}>
                            <input id="flight-search" onChange={(e) => searchFN()} type="text" style={{marginLeft:"4em", minHeight:"1em"}}placeholder="Search by Departure"></input>
                          </div>
                          <Button style={{marginLeft:"1em", background:"black"}}  onClick={() => window.location.reload()}>RESET</Button>
                      </CardContent>
                  </Card>
              <div className="flight-list">
              {Data.map((x) => {
                return (
                  <div key={x.number}>
                    <Flight
                      fl = {x}
                    ></Flight>
                  </div>
                );
              })}
              </div>
            </Card>
        </div>
      </div>
    );
}

export default Flights;
