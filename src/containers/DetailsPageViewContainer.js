import { connect } from 'react-redux'

import DetailsPageView from '../components/DetailsPageView'
import { toggleStarredStatus } from "../thunks/details";

const mapStateToProps = ({ repoReducer: {  byUid } }, { match }) => {
	const { uid } = match.params
	const item = byUid[uid]

	if (!item) {
		throw new Error('Page does not exist')
	}

	return {
		uid,
		...item
	}
}

const mapDispatchToProps = (dispatch, { match }) => {
	const { uid } = match.params
	return {
		onStarClick: (path, starredStatus) => { dispatch(toggleStarredStatus(path, uid, starredStatus))
		}
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DetailsPageView)
