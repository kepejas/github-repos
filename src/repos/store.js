import * as superagent from 'superagent'

export const getRepos = (query) => {
	return superagent
		.get(`https://api.github.com/search/repositories?q=${query}`)
		.then(response => response.body)
};
