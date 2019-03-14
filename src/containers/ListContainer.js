import { connect } from 'react-redux'

import List from '../components/List'

const mapStateToProps = ({ repoReducer }) => ({
	uids: repoReducer.uids
})

export default connect(
	mapStateToProps,
	{}
)(List)
