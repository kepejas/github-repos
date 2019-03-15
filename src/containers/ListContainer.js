import { connect } from 'react-redux'

import List from '../components/List'
import { withLoader } from "../components/withLoaderHoc";

const mapStateToProps = ({ repoReducer: { uids }, listLoading }) => ({
	uids,
	loading: listLoading
})

export default connect(
	mapStateToProps,
	{}
)(withLoader(List))
