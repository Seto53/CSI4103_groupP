import {Alert, Button, Zoom} from '@mui/material';
import React from 'react';
import '../../App.css';

function ErrorAlert({open, closeErrorAlert, message}) {
	return (
		<div>
			{open &&
				<Zoom in={open}>
					<div className={'alert'}>
						<Alert
							sx={{
								transform: 'translateX(-50%)',
							}}
							severity="error"
							action={
								<Button
									color="inherit"
									size="mWedium"
									onClick={() => closeErrorAlert()}>
									Close
								</Button>
							}>
							{message}
						</Alert>
					</div>
				</Zoom>
			}
		</div>
	);
}

export default React.memo(ErrorAlert);
