import { createReducer, makeActionCreator, makeSetValueReducer } from "../utils/reducers";
import { getRepos } from "../repos/repos";
import { addMultipleRepos } from "./repos";

const SET_GITHUB_REPOS = 'SET_GITHUB_REPOS'

const setGithubRepos = makeActionCreator(SET_GITHUB_REPOS)

export const loadCurrentSearchQuery = (query) => (
	dispatch
) => {

	return getRepos(query)
		.then(({ items }) => {

			const ids = items.map(({ id }) => id)

			const state = items.map(item => {

				return {
					name: item.name,

					description: item.description,
					license: item.license ? item.license.name : '',
					url: item.url,

					// whether user put or not
					language: item.language,
					//contributors
					stars: item.stargazers_count,
					forks: item.forks_count,
					issues: item.open_issues,
					//aditional data
					fullName: item.full_name
				}
			})

			dispatch(setGithubRepos(state))
			dispatch(addMultipleRepos(ids, state))

		})
}

export default createReducer('', () => ({
	[SET_GITHUB_REPOS]: makeSetValueReducer()
}))
