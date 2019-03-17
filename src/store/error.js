import { makeSetValueActionCreator } from "../utils/actionCreators";
import { createReducer, makeSetValueReducer } from "../utils/reducers";
import { combineReducers } from "redux";

const ERROR_SET_LIST_LOADING_ERROR = 'ERROR_SET_LIST_LOADING_ERROR'
const ERROR_SET_CHART_ERROR = 'ERROR_SET_CHART_ERROR'

export const setListLoadingError = makeSetValueActionCreator(ERROR_SET_LIST_LOADING_ERROR)
export const setChartError = makeSetValueActionCreator(ERROR_SET_CHART_ERROR)


const listError = createReducer(null, () => ({
	[ERROR_SET_LIST_LOADING_ERROR]: makeSetValueReducer()
}))

const chartError = createReducer(null, () => ({
	[ERROR_SET_LIST_LOADING_ERROR]: makeSetValueReducer()
}))


export default combineReducers({
	listError,
	chartError
})
