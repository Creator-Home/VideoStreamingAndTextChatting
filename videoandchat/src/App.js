import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Videostream from './components/Videostream';

import Error from './components/Error';
import Navigation from './components/Navigation';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation />
					<Switch>
						<Route path="/" component={Home} exact />

						<Route path="/videostream" component={Videostream} />

						<Route component={Error} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
