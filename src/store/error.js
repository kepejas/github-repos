import { makeSetValueActionCreator } from "../utils/actionCreators";
import { createReducer, makeSetValueReducer } from "../utils/reducers";

const ERROR_SET_LOADING_ERROR = 'ERROR_SET_LOADING_ERROR'

export const setLoadingError = makeSetValueActionCreator(ERROR_SET_LOADING_ERROR)


export const error = createReducer(false, () => ({
	[ERROR_SET_LOADING_ERROR]: makeSetValueReducer()
}))
