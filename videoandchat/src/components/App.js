import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MiniDrawer from './NavBar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import YouTubeSans from './fonts/YouTubeSansMedium.otf';
import { CssBaseline } from '@material-ui/core';

export default class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<CssBaseline />
				<MiniDrawer />
			</MuiThemeProvider>
		);
	}
}
