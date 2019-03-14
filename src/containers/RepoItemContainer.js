import { connect } from 'react-redux'

import RepoItem from '../components/RepoItem'
import { getContributorsCount } from "../thunks/repos";

const mapStateToProps = ({ repoReducer: {  byUid } }, { uid }) => {
	const item = byUid[uid]
	if (!item) {
		throw new Error('no item')
	}

	return {
		uid,
		...item
	}
}

const mapDispatchToProps = (dispatch, { uid }) => {
	return {
		onAttach: (path) => { dispatch(getContributorsCount(path, uid)) }
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RepoItem)
