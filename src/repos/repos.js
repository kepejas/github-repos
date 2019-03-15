import * as superagent from 'superagent'

import { GITHUB_API } from '../utils/utils'

export const getRepos = (query) => {
	return superagent
		.get(`${GITHUB_API}/search/repositories?q=${query}`)
		.then(response => response.body)
}

export const getContributors = (path) => {
	return superagent
		.get(`${GITHUB_API}/repos/${path}/contributors`)
		.set('Authorization', 'token ' + token )
		.then(response => response.body)
}

export const getStarredData = (path) => {
	return superagent
		.get(`${GITHUB_API}/user/starred/${path}`)
		.set('Authorization', 'token ' + token )
		.then(response => response)
}



export const authenticate = (token) => {
	return superagent
		.get(`${GITHUB_API}/user`)
		.set('Authorization', 'token ' + token )
		.then(response => response.body)
}
