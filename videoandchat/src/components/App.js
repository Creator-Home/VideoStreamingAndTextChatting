import './App.css';
import React, { Component } from 'react';
import MiniDrawer from './NavBar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { purple, grey } from '@material-ui/core/colors';
import YouTubeSans from './fonts/YouTubeSansMedium.otf';
import { CssBaseline } from '@material-ui/core';
import createPalette from '@material-ui/core/styles/createPalette';
import createTypography from '@material-ui/core/styles/createTypography';

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
