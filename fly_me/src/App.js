import React, {useState} from 'react';
import './App.css';
import Home from './front-end/home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Flights from './front-end/flights';
import Hotels from './front-end/hotels';
import About from './front-end/about';
import Bus from './components/Bus';
import NavBar from './components/NavBar';
import {LoadScript} from "@react-google-maps/api";

function App() {
    const [currentLocation, setCurrentLocation] = useState({lat: 45.425256, lng: -75.699871});

    const [zoom, setZoom] = useState(13);

    const googleMapsLibraries = ['places'];

    return (<div>
        <LoadScript
            googleMapsApiKey=""
            libraries={googleMapsLibraries}
        >
            <BrowserRouter>
                <Routes>
                    <Route index path="" element={<Home/>}/>
                    <Route
                        path="/flights"
                        element={<>
                            <NavBar setCurrentLocation={setCurrentLocation} setZoom={setZoom}/>

                            <Flights/>
                        </>}
                    />
                    <Route
                        path="/hotels"
                        element={<>
                            <NavBar setCurrentLocation={setCurrentLocation} setZoom={setZoom}/>

                            <Hotels/>
                        </>}
                    />
                    <Route
                        path="/about"
                        element={<>
                            <NavBar setCurrentLocation={setCurrentLocation} setZoom={setZoom}/>

                            <About/>
                        </>}
                    />
                    <Route
                        path="/bus"
                        element={<>
                            <NavBar setCurrentLocation={setCurrentLocation} setZoom={setZoom}/>

                            <Bus currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} zoom={zoom}
                                 setZoom={setZoom}/>
                        </>}
                    />
                </Routes>
            </BrowserRouter>
        </LoadScript>
    </div>);
}

export default App;
