import React from 'react'
import Octicon, { Person } from '@githubprimer/octicons-react'
import styles from './../RepoItem/RepoItem.module.css'

export const ContributorsItem = ({ loading, contributors }) => {

	const contributorsView = contributors === null ? <span>Loading...</span> : contributors
	return (
		<span>
			<Octicon verticalAlign="top" size={20} style={{marginRight: '4px'}} icon={Person}/>
			<span className={styles.iconPadding}>{contributorsView}</span>
		</span>
	)
}
