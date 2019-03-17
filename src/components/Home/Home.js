import React, { Component } from 'react';
import SearchContainer from '../../containers/SearchContainer'
import List from '../../containers/ListContainer'
import styles from './Home.module.css'




class Home extends Component {
	render() {
		return (
			<div className={styles.container}>
				<header className={styles.headerStyle}>
					<SearchContainer />
				</header>
				<List />
			</div>
		);
	}
}

export default Home
