import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'
import { searchThunk } from "../thunks/search";


const mapDispatchToProps = (dispatch) => ({
	onChange: (query) => dispatch(searchThunk(query)),
})

export default connect(
	null,
	mapDispatchToProps
)(SearchBar)
