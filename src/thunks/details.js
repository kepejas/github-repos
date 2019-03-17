import { getCommitsActivity, starARepo, unstarARepo } from "../api/calls";
import { loadStarredInfo } from "./repos";
import { unixToJsDate } from "../utils/utils";
import { setDataToState } from "../store/chart";
import { setLoadingError } from "../store/error";


export const toggleStarredStatus = (path, uid, starredRepoStatus) => (
	dispatch
) => {
	const request = starredRepoStatus ? unstarARepo : starARepo

		return request(path, uid)
			.then((response) => {
				if(response.ok) {
					dispatch(loadStarredInfo(path, uid))
				}
			})
			.catch(() => {
				// show message
				return Promise.resolve()
			})
}


export const loadLoadCommitCountPerWeek = (path, uid) => (
	dispatch,
	getState
) => {

	const currentItemState = getState().repoReducer.byUid[uid]
	const { issues, contributors } = currentItemState

	const coef = _getCoef(contributors, issues)

	return getCommitsActivity(path)
		.then((data) => {

			console.log(data)

			if(data.length) {
				const dataForState = _normalizeStateForChart(data, coef)
				dispatch(setDataToState(dataForState))
			}
			else {
				// TODO: add a proper handler
				dispatch(setLoadingError('No commits were made during the last year'))
			}

		})
}

export const _normalizeStateForChart = (data, coef) => (
	data.map(({ total, week }) => {
		const weekNo = unixToJsDate(week)
		return {
			weekNo,
			commits: Math.round(total * coef)
		}
	}).sort((a, b) => (a.weekNo - b.weekNo))
)

export const _getCoef = (contributors, issues) => {
	if(!issues) {
		return 0
	}
	return Math.round(contributors / issues * 1000) / 1000
}

