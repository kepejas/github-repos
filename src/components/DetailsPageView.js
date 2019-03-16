import React, { Component } from 'react';

import styles from "./DetailsPageView.module.css";
import { RepoCardItem } from "../components/RepoCardItem";
import { DetailsHeaderView } from "./DetailsViewHeader";

class DetailsPageView extends Component {
	render() {
		const { onStarClick, ...props } = this.props
		return (
			<div className={styles.container}>
				<DetailsHeaderView onStarClick={onStarClick} fullName={this.props.fullName} starred={this.props.starred} />
				<RepoCardItem { ...props } />
			</div>
		);
	}
}

export default DetailsPageView
