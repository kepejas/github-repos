import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RepoItem from './../containers/RepoItemContainer'

export default class List extends Component {

	render() {
		const { uids } = this.props

		return (
			<div>
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
}


