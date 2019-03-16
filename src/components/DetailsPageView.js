import React, { Component } from 'react';

import styles from "./DetailsPageView.module.css";
import { RepoCardItem } from "../components/RepoCardItem";
import { DetailsHeaderView } from "./DetailsViewHeader";

class DetailsPageView extends Component {
	render() {
		return (
			<div className={styles.container}>
				{console.log(this.props)}
				<DetailsHeaderView {...this.props} />
				<RepoCardItem { ...this.props } />
			</div>
		);
	}
}

export default DetailsPageView
