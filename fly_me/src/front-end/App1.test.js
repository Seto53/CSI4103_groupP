// 70% code is mine, rest is from ChatGPT
import React from 'react';
import {act, fireEvent, getByTestId, render, waitFor, waitForElementToBeRemoved, within} from '@testing-library/react';
import App from './App1';

describe('App Test', () => {
	it('should display the map and stop input', async () => {
		const {getByTestId} = render(<App/>);
		const map = getByTestId('map');
		const stopInput = getByTestId('stops-input');
		const helpDialog = getByTestId('help-dialog');

		expect(map).toBeInTheDocument();
		expect(stopInput).toBeInTheDocument();
		expect(helpDialog).toBeInTheDocument();

		const helpDialogCloseButton = within(helpDialog).getByTestId('help-dialog-close-button');
		fireEvent.click(helpDialogCloseButton);
		await waitForElementToBeRemoved(() => getByTestId('help-dialog'));

		expect(helpDialog).not.toBeInTheDocument();
	});

	it('should show the selected stop input', async () => {
		const {getByTestId} = render(<App/>);
		const helpDialog = getByTestId('help-dialog');

		const helpDialogCloseButton = within(helpDialog).getByTestId('help-dialog-close-button');
		fireEvent.click(helpDialogCloseButton);
		await waitForElementToBeRemoved(() => getByTestId('help-dialog'));

		const stopsAutocomplete = getByTestId('stops-input');
		const stopsInput = within(stopsAutocomplete).getByRole('combobox');

		act(() => {
			stopsInput.focus();
		});
		fireEvent.change(stopsInput, {target: {value: '1222'}});
		fireEvent.keyDown(stopsInput, {key: 'ArrowDown'});
		fireEvent.keyDown(stopsInput, {key: 'Enter'});

		await waitFor(() => {
			expect(stopsInput.getAttribute('value')).toEqual('1222 WOODRIDGE / BAYSHORE');
		});
	});

	it('should show the routes for the selected stop', async () => {
		const {getByTestId} = render(<App/>);
		const helpDialog = getByTestId('help-dialog');

		const helpDialogCloseButton = within(helpDialog).getByTestId('help-dialog-close-button');
		fireEvent.click(helpDialogCloseButton);
		await waitForElementToBeRemoved(() => getByTestId('help-dialog'));

		const stopsAutocomplete = getByTestId('stops-input');
		const stopsInput = within(stopsAutocomplete).getByRole('combobox');

		act(() => {
			stopsInput.focus();
		});
		fireEvent.keyDown(stopsInput, {key: 'ArrowDown'});
		fireEvent.keyDown(stopsInput, {key: 'Enter'});

		const routesAutocomplete = getByTestId('routes-input');
		expect(routesAutocomplete).toBeInTheDocument();
	});

	it('should show the selected route input', async () => {
		//Must have server running
		const {getByTestId} = render(<App/>);
		const helpDialog = getByTestId('help-dialog');

		const helpDialogCloseButton = within(helpDialog).getByTestId('help-dialog-close-button');
		fireEvent.click(helpDialogCloseButton);
		await waitForElementToBeRemoved(() => getByTestId('help-dialog'));

		const stopsAutocomplete = getByTestId('stops-input');
		const stopsInput = within(stopsAutocomplete).getByRole('combobox');

		act(() => {
			stopsInput.focus();
		});
		fireEvent.change(stopsInput, {target: {value: '1222'}});
		fireEvent.keyDown(stopsInput, {key: 'ArrowDown'});
		fireEvent.keyDown(stopsInput, {key: 'Enter'});

		const routesAutocomplete = getByTestId('routes-input');
		const routesInput = within(routesAutocomplete).getByRole('combobox');

		act(() => {
			routesInput.focus();
		});
		fireEvent.change(routesInput, {target: {value: '57'}});
		fireEvent.keyDown(routesInput, {key: 'ArrowDown'});
		fireEvent.keyDown(routesInput, {key: 'Enter'});

		await waitFor(() => {
			expect(routesInput.getAttribute('value')).toEqual('57');
		});
	});
});
