import React, { Component } from 'react';

import styles from './DetailsPageView.module.css';
import { DetailsHeaderView } from './DetailsViewHeader'
import RepoItem from './../containers/RepoInDetailsContainer'
import { ChartsComponent } from "./Chart";

class DetailsPageView extends Component {
	render() {
		const { onStarClick, data, ...props } = this.props
		return (
			<div className={styles.container}>
				<DetailsHeaderView onStarClick={onStarClick} fullName={this.props.fullName} starred={this.props.starred} />
				<RepoItem { ...props } />
				<ChartsComponent data={data} />
			</div>
		);
	}
}

export default DetailsPageView
