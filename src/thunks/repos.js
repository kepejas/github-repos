import { getContributors, getStarredData } from "../api/calls";
import { setContributorCount, setStarredState } from "../store/repos";

const loadContributorsCount = (path, uid) => (
	dispatch
) => {
	return getContributors(path)
		.then((body) => {
			if (body){
				dispatch(setContributorCount(uid, body.length))
			}
		})
}

export const loadStarredInfo = (path, uid) => (
	dispatch
) => {
	return getStarredData(path)
		.then((response) => {
			if(response.ok) {
				dispatch(setStarredState(uid, true))
			}
		})
		.catch(() => {
			dispatch(setStarredState(uid, false))
			return Promise.resolve()
		})

}

export const loadUserInfo = (path, uid) => (
	dispatch
) => {
	dispatch(loadContributorsCount(path, uid))
	dispatch(loadStarredInfo(path, uid))
}
