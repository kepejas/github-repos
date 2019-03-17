import React, { Component } from 'react'
import Home from '../components/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DetailsPageView } from "../components/DetailsPageView/DetailsPageView";

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/repo/:uid" component={DetailsPageView} />
				</Switch>
			</Router>
		)
	}
}

export default App
