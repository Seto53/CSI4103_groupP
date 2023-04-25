import React from 'react';
import '../../App.css';
import {Alert, AlertTitle, Button, LinearProgress, Zoom} from '@mui/material';

function TrackingAlert({open, selectRoute, selectedRoute, selectedStop, busMarker}) {
	return (
		<div>
			{open &&
				<Zoom in={open}>
					<div className={'alert'}>
						<Alert
							sx={{
								transform: 'translateX(-50%)',
							}}
							severity="success"
							action={
								<Button
									color="inherit"
									size="medium"
									className={'bus-track-alert-button'}
									onClick={() => selectRoute(null)}>
									Stop Tracking
								</Button>
							}>
							<AlertTitle>Now
								Tracking {selectedRoute.RouteNo + ' ' + selectedRoute.RouteLabel}</AlertTitle>
							Tracking bus {selectedRoute.RouteNo + ' ' + selectedRoute.RouteLabel} at
							stop <strong>{selectedStop.stop_code + ' ' + selectedStop.stop_name}</strong>.<br/>
							Eta: <strong>{busMarker.route_eta} minute(s)</strong>
							<LinearProgress
								color="success"
								className={'bus-track-alert-bar'}
							/>
						</Alert>
					</div>
				</Zoom>
			}
		</div>
	);
}

export default React.memo(TrackingAlert);
