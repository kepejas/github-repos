import { getCommitsActivity, starARepo, unstarARepo } from '../api/calls'
import { loadStarredInfo } from './repos'
import { unixToJsDate } from '../utils/utils'
import { setDataToState } from '../store/chart'

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

const getAndHandleCommitsActivity = (path, uid, coef) => (
	dispatch
) => {
	return getCommitsActivity(path)
		.then((response) => {
			if(response.status !== 200) {
				dispatch(getAndHandleCommitsActivity(path, uid))
			} else {
				const dataForState = _normalizeStateForChart(response.body, coef)
				dispatch(setDataToState(dataForState))
			}
		})
}


export const loadLoadCommitCountPerWeek = (path, uid) => (
	dispatch,
	getState
) => {

	dispatch(setDataToState([]))

	const currentItemState = getState().repoReducer.byUid[uid]
	const { issues, contributors } = currentItemState

	const coef = _getCoef(contributors, issues)

	console.log('coef', coef);

	return dispatch(getAndHandleCommitsActivity(path, uid, coef))
}

export const _normalizeStateForChart = (data, coef) => {
	if (data && data.length) {

		return data.map(({total, week}) => {
			const weekNo = unixToJsDate(week)
			console.log(typeof total)
			return {
				weekNo,
				commits: Math.round(total * coef)
			}
		}).sort((a, b) => (a.weekNo - b.weekNo))
	}
}

export const _getCoef = (contributors, issues) => {
	if(!issues) {
		return 0
	}
	const contr = contributors || 0
	return Math.round(contr / issues * 1000) / 1000
}

