import React, {useEffect, useState} from 'react';
import {GoogleMap, InfoWindowF, MarkerF, OverlayView} from '@react-google-maps/api';
import busIcon from '../assets/bus_icon.svg';
import busStop from '../assets/bus_stop.svg';
import {Box, Chip, LinearProgress, Stack, Typography} from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';

const containerStyle = {
    width: '100%', height: '100%'
};

function Map({
                 selectedStop,
                 busMarker,
                 stops,
                 routes,
                 selectStop,
                 selectRoute,
                 currentLocation,
                 setCurrentLocation,
                 zoom,
                 setZoom,
                 hotels
             }) {

    const [map, setMap] = useState(null);
    const [hotelWindow, setHotelWindow] = useState(null);

    const [visibleStops, setVisibleStops] = useState([]);
    const [stopWindow, setStopWindow] = useState(null);

    // Previously used for the deprecated ETA InfoWindow
    //const [etaOpen, setETAOpen] = useState(false);

    // Uncomment this before running the tests
    useEffect(() => {
        // Request user's location, if available
        navigator?.geolocation.getCurrentPosition(
            ({coords: {latitude: lat, longitude: lng}}) => {
                setCurrentLocation(prevState => ({...prevState, lat, lng}));
                setZoom(18);
            }
        );
    }, []);

    useEffect(() => {
        // This gets called when the user selects a stop from the list
        // It centers the map on the selected stop
        if (selectedStop) {
            setCurrentLocation(prevState => ({...prevState, lat: selectedStop.stop_lat, lng: selectedStop.stop_lon}));
            setZoom(20);
        }
    }, [selectedStop]);

    useEffect(() => {
        // This gets called when the user clicks on a bus marker
        // It centers the map on the bus marker
        if (!busMarker) return;
        if (busMarker.route_lat === '' || busMarker.route_lon === '') return;
        setCurrentLocation(prevState => ({
            ...prevState,
            lat: Number(busMarker.route_lat),
            lng: Number(busMarker.route_lon)
        }));
        setZoom(18);
    }, [busMarker]);

    function onLoad(newMap) {
        setMap(newMap);
    }

    function onZoomChanged() {
        if (map !== null) {
            setZoom(map.getZoom());
        }
    }

    function onIdle() {
        if (!map) return;
        if (map.getZoom() >= 17) {
            const bounds = map.getBounds();
            let visibleStops = stops.filter(stop => {
                const stopLat = Number(stop.stop_lat);
                const stopLng = Number(stop.stop_lon);
                return bounds.contains({lat: stopLat, lng: stopLng});
            });
            visibleStops = visibleStops.filter((stop, index, self) =>
                index === self.findIndex((t) => (
                    t.stop_code === stop.stop_code
                )));
            setVisibleStops(visibleStops);
            if (stopWindow) {
                const stopWindowInVisibleStops = visibleStops.find(stop => stop.stop_code === stopWindow.stop_code);
                if (!stopWindowInVisibleStops) {
                    setStopWindow(null);
                }
            }
        } else {
            setVisibleStops([]);
            setStopWindow(null);
        }
    }

    // The two functions below were for the deprecated ETA InfoWindow
    /* function handleBusHover() {
        setETAOpen(true);
    }

    function handleBusUnhover() {
        setETAOpen(false);
    } */


    function onStopClick(stop) {
        if (map) {
            selectStop(stop);
            setStopWindow(prevState => ({
                ...prevState,
                stop_code: stop.stop_code,
                stop_name: stop.stop_name
            }));
        }
    }

    function HotelMarkerOverlay({name, onMouseEnter, onMouseLeave}) {
        return (
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{
                    position: 'absolute',
                    transform: 'translate(-50%, -100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <HotelIcon fontSize="large" color="secondary"/>
                <Typography variant="caption">
                    {name}
                </Typography>
            </div>
        );
    }


    return (
        <div data-testid="map" className={'map'}>
            <GoogleMap
                center={currentLocation}
                mapContainerStyle={containerStyle}
                zoom={zoom}
                onLoad={(map) => {
                    onLoad(map);
                }}
                onIdle={onIdle}
                onZoomChanged={onZoomChanged}>
                {busMarker && <MarkerF
                    className={'bus-marker'}
                    position={{lat: Number(busMarker.route_lat), lng: Number(busMarker.route_lon)}}
                    label={String(busMarker.route_code)}
                    title={busMarker.route_code + ' ' + busMarker.route_name}
                    icon={busIcon}
                    // The deprecated ETA InfoWindow below has been replaced by the TrackingAlert in ./Alerts/TrackingAlert.jsx
                    /* onMouseOver={() => {
                        handleBusHover();
                    }}
                    onMouseOut={() => {
                        handleBusUnhover();
                    }}
                    >
                    {etaOpen ? (
                        <InfoWindowF onCloseClick={() => setETAOpen(false)}>
                            <div>
                                <p>
                                    Bus <b>{busMarker.route_code} {busMarker.route_name}</b>
                                    <br/>
                                    at stop <b>{selectedStop.stop_code} {selectedStop.stop_name}</b> in
                                    <br/>
                                    <b>{busMarker.route_eta} minute(s)</b>
                                </p>
                            </div>
                        </InfoWindowF>
                    ) : null} */
                    >
                </MarkerF>}
                {visibleStops.map(stop => {
                    return (
                        <MarkerF
                            className={'stop-marker'}
                            key={stop.stop_code}
                            position={{lat: Number(stop.stop_lat), lng: Number(stop.stop_lon)}}
                            label={String(stop.stop_code)}
                            title={stop.stop_name}
                            icon={busStop}
                            onClick={() => {
                                onStopClick(stop);
                            }}
                            animation={window.google.maps.Animation.DROP}>
                            {stopWindow && stopWindow.stop_code === stop.stop_code && (
                                <InfoWindowF onCloseClick={() => setStopWindow(null)}>
                                    <Box>
                                        <Typography gutterBottom variant="body1">
                                            Choose a route
                                        </Typography>
                                        <Stack direction="row" spacing={1}>
                                            {!routes &&
                                                <Box sx={{width: '100%'}}>
                                                    <LinearProgress/>
                                                </Box>}
                                            {routes && routes.length === 0 &&
                                                <Box sx={{width: '100%'}}>
                                                    <Typography variant="body2" color="text.secondary">
                                                        No routes found
                                                    </Typography>
                                                </Box>}
                                            {routes && routes.map(route => {
                                                if (route.disabled) {
                                                    return (
                                                        <Chip
                                                            key={route.RouteNo + ' ' + route.RouteLabel}
                                                            label={route.RouteNo + ' ' + route.RouteLabel}
                                                            disabled
                                                            color="error"
                                                        />
                                                    );
                                                }
                                                return (
                                                    <Chip
                                                        key={route.RouteNo + ' ' + route.RouteLabel}
                                                        label={route.RouteNo + ' ' + route.RouteLabel}
                                                        onClick={() => {
                                                            selectRoute(route);
                                                        }}
                                                        color="primary"
                                                    />
                                                );
                                            })}
                                        </Stack>
                                    </Box>
                                </InfoWindowF>
                            )}
                        </MarkerF>
                    );
                })}
                {hotels.map((hotel, index) => {
                    return (
                        <OverlayView
                            position={{lat: Number(hotel.location.lat), lng: Number(hotel.location.lng)}}
                            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                            key={hotel.name}
                        >
                            <div>
                                <HotelMarkerOverlay
                                    onMouseEnter={() => setHotelWindow(index)}
                                />
                                {hotelWindow === index && (
                                    <InfoWindowF position={{lat: Number(hotel.location.lat), lng: Number(hotel.location.lng)}}>
                                        <div>
                                            <Typography variant="body1">
                                                {hotel.name}
                                            </Typography>
                                            <Typography variant="body2">
                                                {hotel.address}
                                            </Typography>
                                        </div>
                                    </InfoWindowF>
                                )}
                            </div>
                        </OverlayView>
                    );
                })}
            </GoogleMap>
        </div>
    );
}

export default React.memo(Map);
