import { connect } from 'react-redux'

import List from '../components/List/List'
import { withLoader } from "../components/withLoaderHoc";
import { composeError } from "../components/composeErrorHoc";
import { setDataToState } from "../store/chart";

const mapStateToProps = ({ repoReducer: { uids }, searchReducer: { loading, noResults }, error }) => ({
	uids,
	loading: loading && !noResults,
	noResults,
	error: error.listError && !loading
})

const mapDispatchToProps = (dispatch) => {
	return {
		onAttach: () => { dispatch(setDataToState([])) }
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(composeError(withLoader(List)))
