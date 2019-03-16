import { createReducer, makeSetValueReducer } from "../utils/reducers";
import { getRepos } from "../api/calls";
import { addMultipleRepos, resetReposBeforeNewQuery } from "./repos";
import { makeSetValueActionCreator } from "../utils/actionCreators";
import { combineReducers } from "redux";
import { setLoadingError } from "./error";

const SEARCH_SET_LOADING = 'SEARCH_SET_LOADING'
const SEARCH_SET_NO_RESULTS = 'SEARCH_SET_NO_RESULTS'

const setLoading = makeSetValueActionCreator(SEARCH_SET_LOADING)
const setNoResultsFound = makeSetValueActionCreator(SEARCH_SET_NO_RESULTS)

export const loadCurrentSearchQuery = (query) => (
	dispatch
) => {

	dispatch(resetReposBeforeNewQuery())
	dispatch(setLoading(true))
	dispatch(setNoResultsFound(false))

	return getRepos(query)
		.then(({ items }) => {
			dispatch(setLoading(false))
			if(!items.length) {
				dispatch(setNoResultsFound(true))
			} else {
				const ids = items.map(({ id }) => id)

				const state = items.map(item => ({
					name: item.name,
					description: item.description,
					license: item.license ? item.license.name : '',
					url: item.html_url,
					language: item.language,
					stars: item.stargazers_count,
					forks: item.forks_count,
					issues: item.open_issues,

					fullName: item.full_name
				}))

				dispatch(addMultipleRepos(ids, state))
			}
		})
		.catch(() => {
			dispatch(setLoadingError('One or more resources failed to load'))
		})
}

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
