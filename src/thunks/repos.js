import { getContributors, getStarredData } from "../api/calls";
import { setContributorCount, setRepoItemLoading, setStarredState } from "../store/repos";

export const loadContributorsCount = (path, uid) => (
	dispatch
) => {
	dispatch(setContributorCount(null))
	return getContributors(path)
		.then((response) => {
			if (response.status === 202) {
				dispatch(loadContributorsCount(path, uid))
			}
			if (response.status === 204) {
				dispatch(setContributorCount(uid, 'No data'))
			}
			if (response.status === 200 && response.body) {
				dispatch(setContributorCount(uid, response.body.length))
			}
		})

		.then(() => {
			dispatch(setRepoItemLoading(uid, false))
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
	dispatch,
	getState
) => {
	const { contributors } = getState().repoReducer.byUid[uid]

	if(contributors === null){
		dispatch(loadContributorsCount(path, uid))
	}
	dispatch(loadStarredInfo(path, uid))
}
