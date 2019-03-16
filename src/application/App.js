import React, { Component } from 'react'
import Home from '../components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailsPageViewContainer from "../containers/DetailsPageViewContainer";

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/repo/:uid" component={DetailsPageViewContainer} />
				</Switch>
			</Router>
		)
	}
}

export default App
