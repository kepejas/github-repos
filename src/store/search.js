import { createReducer, makeSetValueReducer } from "../utils/reducers";
import { makeSetValueActionCreator } from "../utils/actionCreators";
import { combineReducers } from "redux";

const SEARCH_SET_LOADING = 'SEARCH_SET_LOADING'
const SEARCH_SET_NO_RESULTS = 'SEARCH_SET_NO_RESULTS'

export const setLoading = makeSetValueActionCreator(SEARCH_SET_LOADING)
export const setNoResultsFound = makeSetValueActionCreator(SEARCH_SET_NO_RESULTS)


const loading = createReducer(false, () => ({
	[SEARCH_SET_LOADING]: makeSetValueReducer()
}))

const noResults = createReducer(false, () => ({
	[SEARCH_SET_NO_RESULTS]: makeSetValueReducer()
}))

export default combineReducers({
	loading,
	noResults,
})
