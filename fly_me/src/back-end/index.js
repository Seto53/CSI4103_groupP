import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../App';
import reportWebVitals from '../reportWebVitals';

require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000;
const OCTranspoID = process.env.OCTranspoID;
const OCTranspoKey = process.env.OCTranspoKey;

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));



// Route to get all routes given a stop code
app.get('/route/:stop_code', (req, res) => {
	// Check if stop code is valid
	if (!req.params.stop_code) {
		res.status(400);
		res.send('Invalid stop code');
		console.log(res.status + ' Invalid stop code');
		return;
	}
	const stop_code = req.params.stop_code;
	if (isNaN(stop_code) || String(stop_code).length !== 4) {
		res.status(400);
		res.send('Invalid stop code');
		console.log(res.status + ' Invalid stop code');
		return;
	}
	const url = `https://api.octranspo1.com/v2.0/GetNextTripsForStop?appID=${OCTranspoID}&apiKey=${OCTranspoKey}&stopNo=${stop_code}&format=json`;
	fetch(url).then(response => {
		if (response.status === 200) {
			res.status(response.status);
			try {
				return response.json();
			} catch (e) {
				res.status(400);
				res.send('Invalid stop code');
				console.log(res.status + ' Invalid stop code');
			}
		} else if (response.status === 400) {
			res.status(400);
			res.send('Invalid stop code');
			console.log(res.status + ' Invalid stop code');
		} else {
			res.status(response.status);
			res.send('Error');
			console.log(res.status + ' Error');
		}
	}).then(data => {
		res.send(data);
	});
});

// Route to get a route given a stop code and route number
app.get('/route/:stop_code/:RouteNo', (req, res) => {
	// Check if stop code is valid
	if (!req.params.stop_code) {
		res.status(400);
		res.send('Invalid stop code');
		console.log(res.status + ' Invalid stop code');
		return;
	}
	if (!req.params.RouteNo) {
		res.status(400);
		res.send('Invalid route number');
		console.log(res.status + ' Invalid route number');
		return;
	}
	const stop_code = req.params.stop_code;
	const RouteNo = req.params.RouteNo;
	if (isNaN(stop_code) || String(stop_code).length !== 4) {
		res.status(400);
		res.send('Invalid stop code');
		console.log(res.status + ' Invalid stop code');
		return;
	}
	// Check if route number is valid
	if (isNaN(RouteNo)) {
		res.status(400);
		res.send('Invalid route number');
		console.log(res.status + ' Invalid route number');
		return;
	}
	const url = `https://api.octranspo1.com/v2.0/GetNextTripsForStop?appID=${OCTranspoID}&apiKey=${OCTranspoKey}&stopNo=${stop_code}&routeNo=${RouteNo}&format=json`;
	fetch(url).then(response => {
		if (response.status === 200) {
			res.status(response.status);
			try {
				return response.json();
			} catch (e) {
				res.status(400);
				res.send('Invalid stop or route code');
				console.log(res.status + ' Invalid stop or route code');
			}
		} else if (response.status === 400) {
			res.status(400);
			res.send('Invalid stop or route code');
			console.log(res.status + ' Invalid stop or route code');
		} else {
			res.status(response.status);
			res.send('Error');
			console.log(res.status + ' Error');
		}
	}).then(data => {
		const routes = data.GetNextTripsForStopResult.Route.RouteDirection;
		// Check if route exists
		if (!Array.isArray(routes)) {
			if (routes.RouteNo === '') {
				res.status(400);
				res.send('This route does not stop at this stop');
				console.log(res.status + ' This route does not stop at this stop');
				return;
			}
		}
		res.send(data);
	});
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
