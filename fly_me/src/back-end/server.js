const firebase = require("firebase");
require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyBxy37Wlr-EpNyYlh5oB7DvMm2HYq3WSFs",
  authDomain: "fly-me-17803.firebaseapp.com",
  projectId: "fly-me-17803",
  storageBucket: "fly-me-17803.appspot.com",
  messagingSenderId: "567243549989",
  appId: "1:567243549989:web:c85da01ea5c28d3157becc",
  measurementId: "G-PSDQGHGCE6"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(cors());

// app.get('/flights', (req, res) => {

//     // const flights = []
//     // db.collection("flights").get()
//     //     .then(function(querySnapshot) {
//     //         querySnapshot.forEach(function(doc) {
//     //         flights.push(doc.data())
//     //     });
//     //     res.json({data:flights})
//     //     return flights;
//     // })
//     // .catch(function(error) {
//     //     console.log("Error getting documents: ", error);
//     // });

//     // //updating data 

//     // db.collection("flights").get()
//     //     .then(function(querySnapshot) {
//     //         querySnapshot.forEach(function(doc) {
//     //         if(doc.data().duration >= 480){
//     //             db.collection("flights").doc(doc.id).update({'landed':true})
//     //             uploadRandomData();
//     //         }
//     //         else{
//     //             newDuration = doc.data()["duration"]+1;
//     //             db.collection("flights").doc(doc.id).update({'duration':newDuration})
//     //         }
//     //     });
//     // })
//     // .catch(function(error) {
//     //     console.log("Error getting documents: ", error);
//     // });

//      const flights = [{"ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)","duration":8,"departure":"Nauru","airline":"Delta Air Lines","departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","landed":false,"number":"bmh666","arrival":"Qatar"},{"departure":"Bolivia","ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)","duration":8,"airline":"British Airways","departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","number":"pgx537","landed":false,"arrival":"Iraq"},{"departure":"Israel","landed":false,"duration":8,"departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)","number":"yln319","airline":"Air Canada","arrival":"Belarus"},{"arrival":"Latvia","landed":false,"ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)","number":"nce767","departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","duration":8,"airline":"Delta Air Lines","departure":"Cape Verde"},{"landed":false,"departure":"Israel","arrival":"Brazil","departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","number":"cwu642","duration":8,"airline":"Delta Air Lines","ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)"},{"ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)","arrival":"Mongolia","airline":"Ryanair","duration":8,"number":"rij727","departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","landed":false,"departure":"Brazil"},{"arrival":"Tuvalu","airline":"Delta Air Lines","duration":8,"landed":false,"number":"ifq944","departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","departure":"Mauritius","ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)"},{"departure":"Belize","duration":8,"departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","arrival":"Guyana","landed":false,"number":"lby506","airline":"United Airlines","ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)"},{"duration":8,"landed":false,"departure":"Bosnia and Herzegovina","airline":"United Airlines","departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","arrival":"Vatican City","ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)","number":"vus425"},{"duration":8,"number":"ofi953","landed":false,"departure":"Chad","airline":"Air Canada","arrival":"Guinea","departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)"},{"ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)","number":"dge898","departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","airline":"Air Canada","duration":8,"arrival":"Cambodia","departure":"France","landed":false},{"number":"esw068","departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","departure":"Belarus","landed":false,"ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)","airline":"British Airways","duration":8,"arrival":"Tajikistan"},{"arrival":"Serbia","duration":8,"landed":false,"departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","number":"txb613","airline":"British Airways","ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)","departure":"Laos"},{"duration":8,"airline":"Delta Air Lines","arrival":"Syria","landed":false,"ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)","departure":"Argentina","number":"sel910","departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)"},{"departure":"Bahrain","airline":"Delta Air Lines","number":"tcm678","landed":false,"ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)","duration":8,"arrival":"Colombia","departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)"},{"departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","departure":"Cape Verde","ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)","number":"kon567","arrival":"Slovenia","airline":"American Airlines","landed":false,"duration":8},{"landed":false,"airline":"Delta Air Lines","number":"evb399","departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","arrival":"Fiji","duration":8,"departure":"Nauru","ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)"},{"departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","landed":false,"ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)","duration":8,"departure":"Bangladesh","airline":"brussels","number":"scr034","arrival":"Saudi Arabia"},{"number":"yad234","duration":8,"ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)","airline":"Lufthansa","departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","arrival":"Russia","landed":false,"departure":"Estonia"},{"landed":false,"ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)","duration":8,"airline":"Ryanair","departure":"Niger","arrival":"Lesotho","departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","number":"oos784"},{"duration":8,"landed":false,"number":"rbw907","departure_time":"Sat Jan 21 2023 19:46:19 GMT-0500 (Eastern Standard Time)","departure":"Portugal","ETA":"Sun Jan 22 2023 03:46:19 GMT-0500 (Eastern Standard Time)","arrival":"Chile","airline":"British Airways"}]
//     return res.json({data:flights})
// });


app.listen(3001, () => {
  console.log('Server started on port 3001');
});






//function to add 8hrs
function futureTimestamp() {
    var now = new Date();
    now.setHours(now.getHours() + 8);
    return now;
}
//console.log(futureTimestamp())
//function to calculate difference in time stamps
function countdown(start, end) {
    var startTime = new Date(start).getTime();
    var endTime = new Date(end).getTime();
    var remainingTime = endTime - startTime;
    return remainingTime;
}

//function to add a second on a given time stamp
function addSecond(timestamp) {
    var date = new Date(timestamp);
    date.setSeconds(date.getSeconds() + 1);
    return date;
}


// count down function
function countdownCallback(start, end, callback) {
    var startTime = new Date(start);
    var endTime = new Date(end);
    var interval = setInterval(() => {
        if (startTime >= endTime) {
            clearInterval(interval);
            return;
        }
        callback(startTime);
        startTime = addSecond(startTime);
    }, 1000);
}

//generating 2 distinct random countries

function generateRandomCountries() {
    const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North", "Korea South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
    "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
    var firstCountry = countries[Math.floor(Math.random()*countries.length)];
    var secondCountry;
    do {
        secondCountry = countries[Math.floor(Math.random()*countries.length)];
    } while (firstCountry === secondCountry);
    return [firstCountry, secondCountry];
}


//radom airline from north america or europe
function generateRandomAirline() {
    const North_American_airlines = ["Air Canada", "American Airlines", "Delta Air Lines", "United Airlines", "WestJet"];
    const European_airlines = ["Air France", "British Airways", "Lufthansa", "Ryanair", "easyJet","brussels"];
    var region = Math.random() < 0.5 ? "North_America" : "Europe";
    var randomAirline;
    if (region === "North_America") {
        randomAirline = North_American_airlines[Math.floor(Math.random()*North_American_airlines.length)];
    } else {
        randomAirline = European_airlines[Math.floor(Math.random()*European_airlines.length)];
    }
    return randomAirline;
}

//radom flight number
function generateRandomString() {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let randomString = '';

    for (let i = 0; i < 3; i++) {
        randomString += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    for (let i = 0; i < 3; i++) {
        randomString += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return randomString;
}

function getFlights(){
    let flights = []
    db.collection("flights").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
        //console.log(doc.id, " => ", doc.data());
        flights.push(doc.data())
        });
        console.log(flights)
        return flights;
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}


function uploadRandomData(){
    let date = new Date();
    let arr = futureTimestamp(date);
    let air = generateRandomAirline();
    let countries = generateRandomCountries();
    let number = generateRandomString();
    let hotel_list = generateHotelRanking(countries[1]);

    db.collection("flights").doc("some-user-id").get()
    .then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
            console.log("No such document!");
            return -1
        }})
    .catch(function(error) {
        console.log("Error getting document:", error);
    });

    db.collection("flights").add({
        ETA: arr.toString(),
        airline: air,
        arrival: countries[1],
        departure: countries[0],
        departure_time: date.toString(),
        duration: 0,
        landed: false,
        number: number,
        hotels: hotel_list
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}
//compare string time stamps
function isAfter(timeString1, timeString2) {
    let time1 = new Date(timeString1);
    let time2 = new Date(timeString2);
    return time2 > time1;
  }

// function to add a minute
function addMinute(timeString) {
    let time = new Date(timeString);
    time.setMinutes(time.getMinutes() + 1);
    return time.toString();
  }

// remaining time

function remainingTime(timeString1, timeString2, minutesPassed) {
    let time1 = new Date(timeString1).getTime();
    let time2 = new Date(timeString2).getTime();
    let difference = (Math.max(time1, time2) - Math.min(time1, time2)) / 1000;
    let remainingTime = difference - minutesPassed * 60;
    let hours = Math.floor(remainingTime / 3600);
    let minutes = Math.floor((remainingTime % 3600) / 60);
    let seconds = Math.floor(remainingTime % 60);
  
    return `${hours}hrs:${minutes}min:${seconds}sec`
  }
  
  async function getFlightByNumber(flightNumber) {
    db.collection("flights").get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
            if(doc.data().number == flightNumber){
                console.log("realy??")
                return doc.data();
            }
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        return -1
    });
}
async function updateFlight(){
    db.collection("flights").get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
            if(doc.data().duration >= 480){
                db.collection("flights").doc(doc.id).update({'landed':true})
                uploadRandomData();
            }
            else{
                let newDuration = doc.data()["duration"]+1;
                db.collection("flights").doc(doc.id).update({'duration':newDuration})
            }
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}
function test(){
    console.log("testing")
    return "fuck"
}
function generateHotelRanking(country) {
    const hotelNames = ["Grand Hotel", "Marriott", "Hilton", "Westin", "Four Seasons", "Intercontinental", "Radisson", "Hyatt", "Sheraton", "W Hotels"];
    const rankings = [1, 2, 3, 4, 5];
    let hotels = [];
    
    for (let i = 0; i < 5; i++) {
      let randomHotelIndex = Math.floor(Math.random() * hotelNames.length);
      let randomRankingIndex = Math.floor(Math.random() * rankings.length);
      let hotel = {};
      hotel[hotelNames[randomHotelIndex]+"_"+country] = rankings[randomRankingIndex];
      hotels.push(hotel);
    }
    
    return hotels;
  }


for (let i = 0; i <= 20; i++) {
    uploadRandomData();
}
