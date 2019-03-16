import React, { PureComponent } from 'react'
import { func } from 'prop-types'
import { RepoCardItem } from './RepoCardItem'




export default class RepoItem extends PureComponent {

	componentDidMount() {
		const { onAttach, fullName } = this.props
		onAttach(fullName)
	}

	render() {

		return (
			<RepoCardItem {...this.props} />
		)
	}
}

RepoItem.propTypes = {
	onAttach: func
}
