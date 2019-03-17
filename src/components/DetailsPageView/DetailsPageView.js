import React from 'react';

import styles from './DetailsPageView.module.css';
import DetailsHeaderView from '../../containers/DetailsHeaderViewContainer'
import RepoItem from '../../containers/RepoInDetailsContainer'
import Charts from '../../containers/ChartsContainer'


export const DetailsPageView = ({ match: { params: { uid } } }) => (
	<div className={styles.container}>
		<div className={styles.header}>
			<DetailsHeaderView uid={uid} />
			<RepoItem uid={uid} />
		</div>
		<Charts uid={uid} />
	</div>
)
