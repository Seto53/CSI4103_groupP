import "./styles/fligths.css";
import React, {useEffect, useState} from "react";

import {Card, CardContent} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Hotel from "./Hotel";
import {db} from "../firebase";
import "firebase/firestore"

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

export function Hotels() {

    const [Data, setData] = useState([]);
    const [DataCopy, setDataCopy] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [country, setCountry] = useState("")
    const [rankSort, setRankSort] = useState(false)
    const [nameSort, setNameSort] = useState(false)
    const [addSort, setAddSort] = useState(false)

    useEffect(() => {
        try {
            const hotels = []
            db.collection("hotels").get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        hotels.push(doc.data())
                    });
                    console.log(hotels, "test")
                    setData(hotels);
                    setDataCopy(hotels);
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
        } catch {
            //error page
        }
    }, [])

    function sortByName(arr) {
        if (nameSort) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j].name.toLowerCase() < arr[j + 1].name.toLowerCase()) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            setNameSort(!nameSort)
            return arr;
        } else {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j].name.toLowerCase() > arr[j + 1].name.toLowerCase()) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            setNameSort(!nameSort)
            return arr;
        }
    }

    function sortByAdd(arr) {
        if (addSort) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j].address.toLowerCase() < arr[j + 1].address.toLowerCase()) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            setAddSort(!addSort)
            return arr;
        } else {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j].address.toLowerCase() > arr[j + 1].address.toLowerCase()) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            setAddSort(!addSort)
            return arr;
        }
    }

    function sortByRank(arr) {
        if (rankSort) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j].stars > arr[j + 1].stars) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            setRankSort(!rankSort)
            return arr;
        } else {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j].stars < arr[j + 1].stars) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            setRankSort(!rankSort)
            return arr;
        }
    }

    function filterByHotelNAme(flightsArray, substring) {
        const lowerCaseSubstring = substring.toLowerCase();
        return flightsArray.filter(hotel => {
            const lowerCaseHotelName = hotel.name.toLowerCase();
            return lowerCaseHotelName.includes(lowerCaseSubstring);
        });
    }


    function searchFN() {
        const flightSearch = document.getElementById('hotel-search');
        const searchValue = flightSearch.value;
        let deps = [...DataCopy]
        deps = filterByHotelNAme(deps, searchValue)
        setData(deps)
    }

    function sortName() {
        let deps = [...Data]
        deps = sortByName(deps)
        setData(deps)
    }

    function sortRank() {
        let fns = [...Data]
        fns = sortByRank(fns)
        setData(fns)
    }

    function sortAdd() {
        let fns = [...Data]
        console.log(Data)
        fns = sortByAdd(fns)
        setData(fns)
        console.log("dept clicked", Data)
    }

    return (
        <div style={{backgroundColor: "rgb(211, 211, 211)", height: "100vh", width: "100%"}}>
            <div className="content2"
                 style={{zIndex: "999", width: "99vw", marginLeft: "-1em"}}>
                <h2 style={{textAlign: "center", fontSize: "2em"}}>Hotels</h2>
                <Card style={{
                    opacity: "0.9",
                    background: "black",
                    maxHeight: "35em",
                    marginLeft: "6em",
                    marginTop: "1em",
                    overflowX: "hidden"
                }}>
                    <Card style={{
                        opacity: "0.8",
                        marginRight: "1em",
                        maxHeight: "6em",
                        minWidth: "100%",
                        color: "black",
                        background: "#00a291"
                    }}>
                        Sort by:
                        <CardContent className="float-container" style={{
                            textAlign: "center",
                            display: "flex",
                            minWidth: "70vw",
                            background: "#00a291"
                        }}>
                            <div className="float-child-c" onClick={() => sortName()} style={{minWidth: "28vw"}}>Name
                            </div>
                            <div className="float-child-c" onClick={() => sortAdd()}
                                 style={{minWidth: "30vw"}}>Address
                            </div>
                            <div className="float-child-c" onClick={() => sortRank()}
                                 style={{minWidth: "10vw"}}>Ranking
                            </div>
                            <div onClick={() => searchFN()} className="searchgo"
                                 style={{marginLeft: "0em", minHeight: "1em", minWidth: "10em"}}>
                                <input id="hotel-search" onChange={(e) => searchFN()} type="text"
                                       style={{marginLeft: "4em", minHeight: "1em", maxWidth: "7vw"}}
                                       placeholder="Hotel Name"></input>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="flight-list" style={{maxheight: '80vh', overflowY: "scroll"}}>
                        {console.log("data", Data)}
                        {Data.map((x, id) => {
                            return (
                                <div className="flight-c" key={id}>
                                    <Hotel
                                        name={x.name}
                                        address={x.address}
                                        ranking={x.stars}
                                    ></Hotel>
                                </div>
                            );
                        })}
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Hotels;
