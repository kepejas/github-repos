import React, { Component } from 'react';
import '../App.css';
import SearchContainer from '../../containers/SearchContainer'
import List from "../../containers/ListContainer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<SearchContainer />
				</header>
				<List loadingLabel={'loading'} />
			</div>
		);
	}
}

export default App
