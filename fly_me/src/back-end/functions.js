// const firebase = require("firebase");
// const config = {
//     apiKey: "AIzaSyBxy37Wlr-EpNyYlh5oB7DvMm2HYq3WSFs",
//     authDomain: "fly-me-17803.firebaseapp.com",
//     databaseURL: "https://fly-me-17803-default-rtdb.firebaseio.com",
//     projectId: "fly-me-17803",
//     storageBucket: "fly-me-17803.appspot.com",
//     messagingSenderId: "567243549989",
//     appId: "1:567243549989:web:c85da01ea5c28d3157becc",
//     measurementId: "G-PSDQGHGCE6"
//   };
// // firebase.initializeApp(config);

// // Add hotels to Firebase collection
// // const db = firebase.firestore();
// //function to add 8hrs
// function futureTimestamp() {
//     var now = new Date();
//     now.setHours(now.getHours() + 8);
//     return now;
// }
// //console.log(futureTimestamp())
// //function to calculate difference in time stamps
// function countdown(start, end) {
//     var startTime = new Date(start).getTime();
//     var endTime = new Date(end).getTime();
//     var remainingTime = endTime - startTime;
//     return remainingTime;
// }

// //function to add a second on a given time stamp
// function addSecond(timestamp) {
//     var date = new Date(timestamp);
//     date.setSeconds(date.getSeconds() + 1);
//     return date;
// }


// // count down function
// function countdownCallback(start, end, callback) {
//     var startTime = new Date(start);
//     var endTime = new Date(end);
//     var interval = setInterval(() => {
//         if (startTime >= endTime) {
//             clearInterval(interval);
//             return;
//         }
//         callback(startTime);
//         startTime = addSecond(startTime);
//     }, 1000);
// }

// //generating 2 distinct random countries

// function generateRandomCountries() {
//     const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North", "Korea South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
//     "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
//     var firstCountry = countries[Math.floor(Math.random()*countries.length)];
//     var secondCountry;
//     do {
//         secondCountry = countries[Math.floor(Math.random()*countries.length)];
//     } while (firstCountry === secondCountry);
//     return [firstCountry, secondCountry];
// }
// function generateRandomCities() {
//     const cities = [
//       "Tokyo",
//       "Delhi",
//       "Shanghai",
//       "São Paulo",
//       "Mumbai",
//       "Mexico City",
//       "Beijing",
//       "Osaka",
//       "Cairo",
//       "New York City",
//       "Dhaka",
//       "Karachi",
//       "Buenos Aires",
//       "Istanbul",
//       "Kolkata",
//       "Manila",
//       "Lagos",
//       "Rio de Janeiro",
//       "Tianjin",
//       "Kinshasa",
//       "Guangzhou",
//       "Los Angeles",
//       "Moscow",
//       "Shenzhen",
//       "Lahore",
//       "Bangalore",
//       "Paris",
//       "Bogotá",
//       "Jakarta",
//       "Chennai",
//       "Lima",
//       "Bangkok",
//       "Hyderabad",
//       "Seoul",
//       "Nagoya",
//       "Chicago",
//       "Chengdu",
//       "London",
//       "Tehran",
//       "Wuhan",
//       "Chongqing",
//       "Nanjing",
//       "Ahmedabad",
//       "Hong Kong",
//       "Kuala Lumpur",
//       "Xi'an",
//       "Dongguan",
//       "Hangzhou",
//       "Shenyang",
//       "Quanzhou",
//       "Toronto",
//       "Miami",
//       "Surat",
//       "Philadelphia",
//       "Harbin",
//       "Dallas",
//       "San Francisco",
//       "Houston",
//       "Atlanta",
//       "Madrid",
//       "Fukuoka",
//       "Barcelona",
//       "Khulna",
//       "Johannesburg",
//       "Saint Petersburg",
//       "Phoenix",
//       "Seattle",
//       "Montreal",
//       "Melbourne",
//       "Rome",
//       "Kiev",
//       "Faisalabad",
//       "Belo Horizonte",
//       "Athens",
//       "Dalian",
//       "Kabul",
//       "Nairobi",
//       "Berlin",
//       "Durban",
//       "Salvador",
//       "Casablanca",
//       "Addis Ababa",
//       "Kano",
//       "Pyongyang",
//       "Surabaya",
//       "Jaipur",
//       "Baoding",
//       "Medellín",
//       "Kathmandu",
//       "Zhengzhou",
//       "Cape Town",
//       "Nanchang",
//       "Accra",
//       "Busan",
//       "Brisbane",
//       "Porto Alegre",
//       "Changsha",
//       "Baku",
//       "Guadalajara",
//       "Tashkent",
//       "Jeddah",
//       "Warsaw",
//       "Toronto",
//       "Budapest",
//       "Aleppo",
//       "Vienna",
//       "Chicago",
//       "Manaus",
//       "Xiamen",
//       "Sana'a",
//       "Belgrade",
//       "Dar es Salaam",
//       "Katowice",
//       "Bucharest",
//       "Esfahan",
//       "Tunis",
//       "Jinan",
//       "Chittagong",
//       "İzmir",
//       "Lubumbashi",
//       "Goiania",
//       "Daegu",
//       "Quito",
//       "Kyoto",
//       "Salta",
//       "Taichung",
//       "Managua",
//       "Mashhad",
//       "Bandung",
//       "Suzhou",
//       "Barranquilla",
//       "Almaty",
//       "Lusaka",
//       "Orlando"]
//       var firstCity = cities[Math.floor(Math.random()*cities.length)];
//       var secondCity = "Ottawa"
//       return [firstCity, secondCity];
//   }  
// //radom airline from north america or europe
// function generateRandomAirline() {
//     const North_American_airlines = ["Air Canada", "American Airlines", "Delta Air Lines", "United Airlines", "WestJet"];
//     const European_airlines = ["Air France", "British Airways", "Lufthansa", "Ryanair", "easyJet","brussels"];
//     var region = Math.random() < 0.5 ? "North_America" : "Europe";
//     var randomAirline;
//     if (region === "North_America") {
//         randomAirline = North_American_airlines[Math.floor(Math.random()*North_American_airlines.length)];
//     } else {
//         randomAirline = European_airlines[Math.floor(Math.random()*European_airlines.length)];
//     }
//     return randomAirline;
// }

// //radom flight number
// function generateRandomString() {
//     let letters = 'abcdefghijklmnopqrstuvwxyz';
//     let numbers = '0123456789';
//     let randomString = '';

//     for (let i = 0; i < 3; i++) {
//         randomString += letters.charAt(Math.floor(Math.random() * letters.length));
//     }

//     for (let i = 0; i < 3; i++) {
//         randomString += numbers.charAt(Math.floor(Math.random() * numbers.length));
//     }
//     return randomString;
// }

// function getFlights(){
//     let flights = []
//     db.collection("flights").get()
//     .then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//         //console.log(doc.id, " => ", doc.data());
//         flights.push(doc.data())
//         });
//         console.log(flights)
//         return flights;
//     })
//     .catch(function(error) {
//         console.log("Error getting documents: ", error);
//     });
// }


// function uploadRandomData(){
//     let date = new Date();
//     let arr = futureTimestamp(date);
//     let air = generateRandomAirline();
//     let countries = generateRandomCities();
//     let number = generateRandomString();

//     db.collection("flights").doc("some-user-id").get()
//     .then(function(doc) {
//         if (doc.exists) {
//             console.log("Document data:", doc.data());
//         } else {
//           // doc.data() will be undefined in this case
//             console.log("No such document!");
//             return -1
//         }})
//     .catch(function(error) {
//         console.log("Error getting document:", error);
//     });

//     db.collection("flights2").add({
//         ETA: arr.toString(),
//         airline: air,
//         arrival: countries[1],
//         departure: countries[0],
//         departure_time: date.toString(),
//         duration: 0,
//         landed: false,
//         number: number
//     })
//     .then(function() {
//         console.log("Document successfully written!");
//     })
//     .catch(function(error) {
//         console.error("Error writing document: ", error);
//     });
// }
// //compare string time stamps
// function isAfter(timeString1, timeString2) {
//     let time1 = new Date(timeString1);
//     let time2 = new Date(timeString2);
//     return time2 > time1;
//   }

// // function to add a minute
// function addMinute(timeString) {
//     let time = new Date(timeString);
//     time.setMinutes(time.getMinutes() + 1);
//     return time.toString();
//   }

// // remaining time

// function remainingTime(timeString1, timeString2, minutesPassed) {
//     let time1 = new Date(timeString1).getTime();
//     let time2 = new Date(timeString2).getTime();
//     let difference = (Math.max(time1, time2) - Math.min(time1, time2)) / 1000;
//     let remainingTime = difference - minutesPassed * 60;
//     let hours = Math.floor(remainingTime / 3600);
//     let minutes = Math.floor((remainingTime % 3600) / 60);
//     let seconds = Math.floor(remainingTime % 60);
  
//     return `${hours}hrs:${minutes}min:${seconds}sec`
//   }
  
//   async function getFlightByNumber(flightNumber) {
//     db.collection("flights").get()
//         .then(function(querySnapshot) {
//             querySnapshot.forEach(function(doc) {
//             if(doc.data().number == flightNumber){
//                 console.log("realy??")
//                 return doc.data();
//             }
//         });
//     })
//     .catch(function(error) {
//         console.log("Error getting documents: ", error);
//         return -1
//     });
// }
// async function updateFlight(){
//     db.collection("flights").get()
//         .then(function(querySnapshot) {
//             querySnapshot.forEach(function(doc) {
//             if(doc.data().duration >= 480){
//                 db.collection("flights").doc(doc.id).update({'landed':true})
//                 uploadRandomData();
//             }
//             else{
//                 let newDuration = doc.data()["duration"]+1;
//                 db.collection("flights").doc(doc.id).update({'duration':newDuration})
//             }
//         });
//     })
//     .catch(function(error) {
//         console.log("Error getting documents: ", error);
//     });
// }
// function test(){
//     console.log("testing")
//     return "fuck"
// }

// for (let i = 0; i <= 20; i++) {
//     uploadRandomData();
// }

