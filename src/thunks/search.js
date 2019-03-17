import { addMultipleRepos, resetReposBeforeNewQuery } from '../store/repos'
import { getRepos } from '../api/calls'
import { setListLoadingError } from '../store/error'
import { setLoading, setNoResultsFound } from '../store/search'
import { setDataToState } from "../store/chart";

export const searchThunk = (query) => (
	dispatch
) => {
	const searchQuery = query.trim()
	if(searchQuery && searchQuery.length > 1) {
		dispatch(loadCurrentSearchQuery(searchQuery))
	}
}

export const loadCurrentSearchQuery = (query) => (
	dispatch
) => {

	dispatch(resetReposBeforeNewQuery())
	dispatch(setLoading(true))
	dispatch(setNoResultsFound(false))
	dispatch(setDataToState([]))

	return getRepos(query)
		.then(({ items }) => {
			if(!items.length) {
				dispatch(setNoResultsFound(true))
			} else {
				const ids = items.map(({ id }) => id)

				const state = items.map(item => ({
					description: item.description,
					license: item.license ? item.license.name : '',
					language: item.language,
					stars: item.stargazers_count,
					forks: item.forks_count,
					issues: item.open_issues,
					contributors: null,
					fullName: item.full_name,
					loading: true
				}))

				dispatch(addMultipleRepos(ids, state))
				dispatch(setLoading(false))
			}
		})
		.catch(() => {
			dispatch(setListLoadingError('One or more resources failed to load'))
		})

}
