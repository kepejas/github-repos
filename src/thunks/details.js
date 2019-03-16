import { getStarredData, starARepo, unstarARepo } from "../api/calls";
import { loadStarredInfo } from "./repos";


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

