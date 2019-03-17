import * as superagent from 'superagent'

import { GITHUB_API } from '../utils/utils'
import { token } from './../config'

const authenticatedAgent = superagent
	.agent()
	.set('Authorization', 'token ' + token)


export const getRepos = (query) => {
	return authenticatedAgent
		.get(`${GITHUB_API}/search/repositories?q=${query}`)
		.then(response => response.body)
}

export const getContributors = (path) => {
	return authenticatedAgent
		.get(`${GITHUB_API}/repos/${path}/stats/contributors`)
		.then(response => response.body)
}

export const getStarredData = (path) => {
	return authenticatedAgent
		.get(`${GITHUB_API}/user/starred/${path}`)
		.then(response => response)
}

export const starARepo = (path) => {
	return authenticatedAgent
		.put(`${GITHUB_API}/user/starred/${path}`)
		.set('Authorization', 'token ' + token)
		.then(response => response)
}

export const unstarARepo = (path) => {
	return authenticatedAgent
		.delete(`${GITHUB_API}/user/starred/${path}`)
		.then(response => response)
}


export const getCommitsActivity = (path) => {
	return authenticatedAgent
		.get(`${GITHUB_API}/repos/${path}/stats/commit_activity`)
		.then(response => response)
}
