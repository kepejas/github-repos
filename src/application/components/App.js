import React, { Component } from 'react';
import '../App.css';
import SearchContainer from '../../containers/SearchContainer'
import RepoItem from "../../components/RepoItem";
import List from "../../components/List";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<SearchContainer />
				</header>
				<RepoItem title={'this is a title'} >labas as krabas</RepoItem>
				<List loadingLabel={'loading'} items={[{title: 'labas'}, {title: 'as krabas'}]} />
			</div>
		);
	}
}

export default App
