import React, {useRef} from 'react';
import '../App.css';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    InputAdornment,
    Menu,
    MenuItem,
    styled,
    TextField,
    Toolbar,
    Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import {StandaloneSearchBox} from '@react-google-maps/api';
import {useLocation} from "react-router";

function NavBar({setCurrentLocation, setZoom}) {
    const pages = [
        {title: 'Flights', link: '/flights'},
        {title: 'Hotels', link: '/hotels'},
        {title: 'About', link: '/about'},
        {title: 'Bus', link: '/bus'}
    ];
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const location = useLocation();

    const StyledTextField = styled(TextField)(({theme}) => ({
        color: '#fff',
        background: 'rgba(255, 255, 255, 0.15)',
        borderRadius: '4px',
        width: '100%',
        '& input': {
            color: '#fff !important'
        },
        '& fieldset': {
            borderWidth: '0px',
            '& fieldset:hover, & fieldset:focus, & fieldset:active': {
                borderWidth: '0px'
            },
            '& .MuiInputBase-input': {
                padding: theme.spacing(2, 1, 1, 2),
                transition: theme.transitions.create('width'),
                color: '#fff',
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                    width: '12ch',
                    '&:focus': {
                        width: '20ch'
                    }
                }
            }
        }
    }));

    const searchBoxRef = useRef();

    const onPlacesChanged = () => {
        const place = searchBoxRef.current.getPlaces()[0];
        selectPlace(place);
    };

    function selectPlace(place) {
        if (!place || !place.geometry || !place.geometry.location) {
            console.log("No location found for place: " + place);
            return
        }
        setCurrentLocation({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        });
        setZoom(18);
    }

    return (
        <div>
            <AppBar position="fixed" style={{ background: '#1B458F' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Visit Ottawa
                        </Typography>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.title} href={page.link} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <DirectionsBusIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Visit Ottawa
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page) => (
                                <Button
                                    key={page.title}
                                    href={page.link}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {page.title}
                                </Button>
                            ))}
                        </Box>
                        {location.pathname === '/bus' && (

                            <StandaloneSearchBox
                                onLoad={(ref) => (searchBoxRef.current = ref)}
                                onPlacesChanged={onPlacesChanged}
                            >
                                <StyledTextField
                                    placeholder="Search an address..."
                                    size="small"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon style={{color: 'white', marginLeft: '8px'}}/>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </StandaloneSearchBox>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default React.memo(NavBar);
