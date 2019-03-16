import { getCommitsActivity, getContributors, getStarredData, starARepo, unstarARepo } from "../api/calls";
import { loadStarredInfo } from "./repos";
import { setContributorCount } from "../store/repos";


export const toggleStarredStatus = (path, uid, starredRepoStatus) => (
	dispatch
) => {
	const request = starredRepoStatus ? unstarARepo : starARepo

	console.log(starredRepoStatus)
	console.log(request + '')

		return request(path, uid)
			.then((response) => {
				if(response.ok) {
					dispatch(loadStarredInfo(path, uid))
				}
			})
			.catch(() => {
				// handle ui error here
				return Promise.resolve()
			})
}


export const loadLoadCommitCountPerWeek = (path, uid) => (
	dispatch
) => {
	return getCommitsActivity(path)
		.then((body) => {
			console.log(body)

			// if (body){
			// 	console.log('body exi')
			// 	// dispatch(setContributorCount(uid, body.length))
			// }
		})
}

