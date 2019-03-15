import { createReducer, makeSetValueReducer } from "../utils/reducers";
import { getRepos } from "../repos/repos";
import { addMultipleRepos, resetReposBeforeNewQuery } from "./repos";
import { makeSetValueActionCreator } from "../utils/actionCreators";

const SET_SEARCH_IN_PROGRESS = 'SET_SEARCH_IN_PROGRESS'

const setLoading = makeSetValueActionCreator(SET_SEARCH_IN_PROGRESS)

export const loadCurrentSearchQuery = (query) => (
	dispatch
) => {

	dispatch(resetReposBeforeNewQuery())
	dispatch(setLoading(true))

	return getRepos(query)
		.then(({ items }) => {

			const ids = items.map(({ id }) => id)

			const state = items.map(item => {

				return {
					name: item.name,
					description: item.description,
					license: item.license ? item.license.name : '',
					url: item.url,
					language: item.language,
					stars: item.stargazers_count,
					forks: item.forks_count,
					issues: item.open_issues,

					fullName: item.full_name
				}
			})

			dispatch(setLoading(false))
			dispatch(addMultipleRepos(ids, state))

		})
}

export const listLoading = createReducer(false, () => ({
	[SET_SEARCH_IN_PROGRESS]: makeSetValueReducer()
}))

