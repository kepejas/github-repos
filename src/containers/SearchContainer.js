import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'

const mapDispatchToProps = (dispatch) => ({
	onChange: (query) => console.log(query),
})

export default connect(
	null,
	mapDispatchToProps
)(SearchBar)
