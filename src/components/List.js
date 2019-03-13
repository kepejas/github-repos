import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class List extends Component {
	render() {
		const {
			isFetching,
			items, loadingLabel
		} = this.props

		const isEmpty = items.length === 0
		if (isEmpty && isFetching) {
			return <h2><i>{loadingLabel}</i></h2>
		}

		return (
			<div>
				{
					items.map((item, index) => (
						<div key={index}>{item.title}</div>
					))
				}
			</div>
		)
	}
}

List.propTypes = {
	loadingLabel: PropTypes.string,
	items: PropTypes.array.isRequired,
	isFetching: PropTypes.bool
}


List.defaultProps = {
	isFetching: false,
	loadingLabel: 'Loading...'
}
