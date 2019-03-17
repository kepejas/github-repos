import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RepoItem from '../../containers/RepoItemInListContainer'
import styles from './List.module.css'

export default class List extends Component {
	render() {
		const { uids, noResults } = this.props

		if (noResults) {
			return <div>No results found</div>
		}

		return (
			<div className={styles.container}>
				{
					uids.map((uid) => (
						<RepoItem key={uid} uid={uid} />
					))
				}
			</div>
		)
	}
}

List.propTypes = {
	uids: PropTypes.array.isRequired,
	noResults: PropTypes.bool
}


