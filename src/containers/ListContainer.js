import { connect } from 'react-redux'

import List from '../components/List/List'
import { withLoader } from "../components/withLoaderHoc";
import { composeError } from "../components/composeErrorHoc";

const mapStateToProps = ({ repoReducer: { uids }, searchReducer: { loading, noResults }, error }) => ({
	uids,
	loading,
	noResults,
	error: error && !loading
})

export default connect(
	mapStateToProps,
	{}
)(composeError(withLoader(List)))
