import React, { Component } from 'react';
import SearchContainer from "../containers/SearchContainer";
import List from "../containers/ListContainer";

const appStyle = {
	textAlign: 'center'
}

const headerStyle = {
	backgroundColor: 'lightgrey',
	minHeight: '15vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: 'calc(10px + 2vmin)',
	color: 'white'
}


class Home extends Component {
	render() {
		return (
			<div style={appStyle}>
				<header style={headerStyle}>
					<SearchContainer />
				</header>
				<List />
			</div>
		);
	}
}

export default Home
