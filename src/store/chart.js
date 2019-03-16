import { makeSetValueActionCreator } from "../utils/actionCreators";
import { createReducer, makeSetValueReducer } from "../utils/reducers";

const CHART_SET_COMMIT_DATA = 'CHART_SET_COMMIT_DATA'

export const setDataToState = makeSetValueActionCreator(CHART_SET_COMMIT_DATA)

export const commitsData = createReducer([], () => ({
	[CHART_SET_COMMIT_DATA]: makeSetValueReducer()
}))
