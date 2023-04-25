import React from 'react';
import {Alert, AlertTitle, Button, CircularProgress, Zoom} from '@mui/material';
import '../../App.css';

function LoadingAlert({open, selectRoute, selectedRoute, selectedStop}) {
	return (
		<div>
			{open &&
				<Zoom in={open}>
					<div className={'alert'}>
						<Alert
							sx={{
								transform: 'translateX(-50%)',
							}}
							severity="info"
							action={
								<Button
									color="inherit"
									size="medium"
									className={'bus-track-alert-button'}
									onClick={() => selectRoute(null)}>
									Cancel
								</Button>
							}>
							<AlertTitle>Tracking {selectedRoute.RouteNo + ' ' + selectedRoute.RouteLabel}...</AlertTitle>
							Attempting to track bus {selectedRoute.RouteNo + ' ' + selectedRoute.RouteLabel} at
							stop <strong>{selectedStop.stop_code + ' ' + selectedStop.stop_name}</strong>...
							<CircularProgress color="primary" className={'bus-track-alert-progress'}/>
						</Alert>
					</div>
				</Zoom>
			}
		</div>
	);
}

export default React.memo(LoadingAlert);
