import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider} from '@mui/material';
import React from 'react';

function HelpDialog({helpOpen, setHelpOpen}) {
	{/*TODO: Help dialog bug*/
	}
	return (
		<div>
			<Dialog
				open={helpOpen}
				onClose={() => {
					setHelpOpen(false);
				}}
				data-testid="help-dialog">
				<DialogTitle
					id="help-dialog-title"
					sx={{
						backgroundColor: '#2a2a2a',
						color: '#FFFF',
					}}>
					Find buses coming near you
					<Divider
						sx={{
							color: '#db2e02',
							borderBottomWidth: '10',
							width: '100%'
						}}/>
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="help-dialog-description">
						<br/>
						How to track a bus:
						<ol>
							<li>
								Search for an address OR zoom into a location on the map.
							</li>
							<li>
								See the bus stops near the desired location.
							</li>
							<li>
								Select a bus stop to see the buses serviced at that stop.
							</li>
							<li>
								Select a bus route to see where that bus is right now, and when it's coming to your stop.
							</li>
						</ol>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						data-testid="help-dialog-close-button"
						onClick={() => {
							setHelpOpen(false);
						}}>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default React.memo(HelpDialog);
