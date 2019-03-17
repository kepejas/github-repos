import { getCommitsActivity, starARepo, unstarARepo } from "../api/calls";
import { loadStarredInfo } from "./repos";
import { unixToJsDate } from "../utils/utils";
import { setDataToState } from "../store/chart";


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
				// handle ui error here
				return Promise.resolve()
			})
}


export const loadLoadCommitCountPerWeek = (path, uid) => (
	dispatch,
	getState
) => {

	const currentItemState = getState().repoReducer.byUid[uid]
	const { issues, contributors } = currentItemState

	console.log({ issues, contributors })

	const coef = _getCoef(contributors, issues)

	return getCommitsActivity(path)
		.then((data) => {

			if(data.length) {
				const dataForState = _normalizeStateForChart(data, coef)
				console.log(dataForState)


				dispatch(setDataToState(dataForState))
			}

		})
}

const _normalizeStateForChart = (data, coef) => (
	data.map(({ total, week }) => {
		const weekNo = unixToJsDate(week)
		return {
			weekNo,
			commits: Math.round(total * coef)
		}
	}).sort((a, b) => (a.weekNo - b.weekNo))
)

const _getCoef = (contributors, issues) => {
	if(!issues) {
		return 0
	}
	return Math.round(contributors / issues * 1000) / 1000
}

