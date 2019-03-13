import { createReducer, makeActionCreator, makeSetValueReducer } from "../utils/reducers";
import { getRepos } from "./store";

// const GET_GITHUB_REPOS = 'GET_GITHUB_REPOS'
const SET_GITHUB_REPOS = 'SET_GITHUB_REPOS'

const setGithubRepos = makeActionCreator(SET_GITHUB_REPOS)

export const loadCurrentSearchQuery = (query) => (
	dispatch,
	getState
) => {

	return getRepos(query)
		.then((repos) => {

			dispatch(setGithubRepos(repos))
		})
}

export default createReducer('', () => ({
	[SET_GITHUB_REPOS]: makeSetValueReducer()
}))
