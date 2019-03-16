import * as superagent from 'superagent'

import { GITHUB_API } from '../utils/utils'
import { token } from './../config'

const agent = superagent.agent().set('Authorization', 'token ' + token)


export const getRepos = (query) => {
	return agent
		.get(`${GITHUB_API}/search/repositories?q=${query}`)
		.then(response => response.body)
}

export const getContributors = (path) => {
	return agent
		.get(`${GITHUB_API}/repos/${path}/contributors`)
		.then(response => response.body)
}

export const getStarredData = (path) => {
	return agent
		.get(`${GITHUB_API}/user/starred/${path}`)
		.then(response => response)
}

