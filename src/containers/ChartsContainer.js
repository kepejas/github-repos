import { connect } from 'react-redux'

import ChartComponent from '../components/Chart/Chart'
import { withLoader } from "../components/withLoaderHoc";


const mapStateToProps = ({ commitsData }) => ({
	data: commitsData,
	loading: !commitsData.length
})

export default connect(
	mapStateToProps,
	{}
)(withLoader(ChartComponent))
