import { connect } from 'react-redux'

import { DetailsHeaderView } from '../components/DetailsHeaderView/DetailsViewHeader'
import { toggleStarredStatus } from "../thunks/details";

const mapStateToProps = ({ repoReducer: {  byUid } }, { uid }) => {
	const item = byUid[uid]

	if (!item) {
		throw new Error('Page does not exist')
	}

	return {
		uid,
		...item
	}
}

const mapDispatchToProps = (dispatch, { uid }) => {
	return {
		onStarClick: (path, starredStatus) => { dispatch(toggleStarredStatus(path, uid, starredStatus)) }
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DetailsHeaderView)
