const firebase = require("firebase");

function uploadHotelsToFirebase() {
    const hotels = [
        {
            name: "Fairmont Château Laurier",
            address: "1 Rideau St, Ottawa, ON K1N 8S7, Canada",
            location: {lat: 45.42567763975408, lng: -75.69529932048869}
        },
        {
            name: "The Westin Ottawa",
            address: "11 Colonel By Dr, Ottawa, ON K1N 9H4, Canada",
            location: {lat: 45.42494044849958, lng: -75.69232764532069}
        },
        {
            name: "Andaz Ottawa ByWard Market",
            address: "325 Dalhousie St, Ottawa, ON K1N 7G1, Canada",
            location: {lat: 45.428894132350344, lng: -75.69086681462998}
        },
        {
            name: "Delta Hotels by Marriott Ottawa City Centre",
            address: "101 Lyon St N, Ottawa, ON K1R 5T9, Canada",
            location: {lat: 45.41865179470834, lng: -75.70437800113928}
        },
        {
            name: "Lord Elgin Hotel",
            address: "100 Elgin St, Ottawa, ON K1P 5K8, Canada",
            location: {lat: 45.42157294831961, lng: -75.69361268579387}
        },
        {
            name: "Sheraton Ottawa Hotel",
            address: "150 Albert St, Ottawa, ON K1P 5G2, Canada",
            location: {lat: 45.42095913656144, lng: -75.69778690299334}
        },
        {
            name: "Hilton Garden Inn Ottawa Downtown",
            address: "361 Queen St, Ottawa, ON K1R 0C7, Canada",
            location: {lat: 45.41872699505305, lng: -75.7058610011391}
        },
        {
            name: "Novotel Ottawa City Centre",
            address: "33 Nicholas St, Ottawa, ON K1N 9M7, Canada",
            location: {lat: 45.42596464590406, lng: -75.6895996453206}
        },
        {
            name: "Courtyard by Marriott Ottawa East",
            address: "200 Coventry Rd, Ottawa, ON K1K 4S3, Canada",
            location: {lat: 45.42086296727215, lng: -75.65624955881184}
        },
        {
            name: "Best Western Plus Ottawa Downtown Suites",
            address: "377 O'Connor St, Ottawa, ON K2P 2M2, Canada",
            location: {lat: 45.413850387297806, lng: -75.69152787144857}
        },
        {
            name: "Ottawa Marriott Hotel",
            address: "100 Kent St, Ottawa, ON K1P 5R7, Canada",
            location: {lat: 45.420269536719054, lng: -75.70329493821403}
        },
        {
            name: "The Metcalfe Hotel",
            address: "123 Metcalfe St, Ottawa, ON K1P 5L9, Canada",
            location: {lat: 45.42051310965043, lng: -75.69522118950239}
        },
        {
            name: "Alt Hotel Ottawa",
            address: "185 Slater St, Ottawa, ON K1P 0C8, Canada",
            location: {lat: 45.420067383368725, lng: -75.69904903182976}
        },
        {
            name: "The Business Inn",
            address: "180 Maclaren St, Ottawa, ON K2P 0L3, Canada",
            location: {lat: 45.417412198560115, lng: -75.68930818579406}
        },
        {
            name: "Arc The Hotel",
            address: "140 Slater St, Ottawa, ON K1P 5H6, Canada",
            location: {lat: 45.42056959013799, lng: -75.69683618579387}
        },
        {
            name: "Residence Inn by Marriott Ottawa Downtown",
            address: "161 Laurier Ave W, Ottawa, ON K1P 5J2, Canada",
            location: {lat: 45.369768089254734, lng: -75.6654447302858}
        },
        {
            name: "The Carleton Suite Hotel",
            address: "161 Laurier Ave W, Ottawa, ON K1P 5J2, Canada",
            location: {lat: 45.420746566291044, lng: -75.69438998640777}
        },
        {
            name: "Hampton Inn by Hilton Ottawa",
            address: "100 Coventry Rd, Ottawa, ON K1K 4S3, Canada",
            location: {lat: 45.42144128340635, lng: -75.65690875695745}
        },
        {
            name: "Les Suites Hotel, Ottawa",
            address: "130 Besserer St, Ottawa, ON K1N 9M9, Canada",
            location: {lat: 45.426528252863186, lng: -75.6889535299753}
        },
        {
            name: "Days Inn by Wyndham Ottawa",
            address: "319 Rideau St, Ottawa, ON K1N 5Y4, Canada",
            location: {lat: 45.43292519483354, lng: -75.68501986814667}
        },
        {
            name: "Hotel Indigo Ottawa Downtown",
            address: "123 Metcalfe St, Ottawa, ON K1P 5L9, Canada",
            location: {lat: 45.4205175096498, lng: -75.69522076437461}
        }
    ];

    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyBxy37Wlr-EpNyYlh5oB7DvMm2HYq3WSFs",
        authDomain: "fly-me-17803.firebaseapp.com",
        databaseURL: "https://fly-me-17803-default-rtdb.firebaseio.com",
        projectId: "fly-me-17803",
        storageBucket: "fly-me-17803.appspot.com",
        messagingSenderId: "567243549989",
        appId: "1:567243549989:web:c85da01ea5c28d3157becc",
        measurementId: "G-PSDQGHGCE6"
    };
    firebase.initializeApp(config);
    const db = firebase.firestore();

    //delete all hotels from Firebase
    // db.collection("hotels").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         db.collection("hotels").doc(doc.id).delete().then(r => console.log("deleted"));
    //     });
    // });

    // Add hotels to Firebase collection
    hotels.forEach(hotel => {
        const randomStars = Math.floor(Math.random() * 3) + 3; // generate random number between 3 and 5 (inclusive)
        const hotelDoc = {name: hotel.name, address: hotel.address, stars: randomStars, location: hotel.location};
        db.collection("hotels").add(hotelDoc)
            .then(() => console.log(`Added ${hotel.name} to Firebase!`))
            .catch(error => console.error(`Error adding ${hotel.name} to Firebase: ${error}`));
    });
}

uploadHotelsToFirebase()
