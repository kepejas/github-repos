import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './SearchBar.module.css'
import { debounce } from "../../utils/utils";

export default class SearchBar extends Component {
	constructor (props) {
		super(props)
		this.state = { searchTerm: props.searchTerm }
	}

	setSearchTerm = debounce(searchTerm => {
		this.setState({ searchTerm })
		this.props.onChange(searchTerm)
	}, 500)

	render() {
		return (
			<div>
				<input
					type="input"
					className={styles.search}
					placeholder={'Search'}
					onChange={e => {this.setSearchTerm(e.target.value)}}
				/>
			</div>
		)
	}
}

SearchBar.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
	placeholder: PropTypes.string
}

SearchBar.defaultProps = {
	onChange: () => {},
	searchTerm: ''
}
