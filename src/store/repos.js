import {
	createReducer,
	makeAddByUidReducer,
	makeAddUidsReducer,
	makeSetPropertyValueByUidReducer, makeResetValueReducer
} from "../utils/reducers";
import {
	makeAddItemsByUidActionCreator, makeResetValueActionCreator,
	makeSetValueByUidActionCreator
} from "../utils/actionCreators";
import { combineReducers } from "redux";

export const REPOS_ADD_ITEMS = 'REPOS_ADD_ITEMS'
export const REPOS_RESET_ITEMS = 'REPOS_RESET_ITEMS'
export const REPOS_SET_STARRED_STATE = 'REPOS_SET_STARRED_STATE'
export const REPO_SET_CONTRIBUTOR_COUNT = 'REPO_SET_CONTRIBUTOR_COUNT'
export const REPO_SET_ITEM_LOADING = 'REPO_SET_ITEM_LOADING'

export const addMultipleRepos = makeAddItemsByUidActionCreator(REPOS_ADD_ITEMS)
export const resetReposBeforeNewQuery = makeResetValueActionCreator(REPOS_RESET_ITEMS)

export const setContributorCount = makeSetValueByUidActionCreator(REPO_SET_CONTRIBUTOR_COUNT)

export const setStarredState = makeSetValueByUidActionCreator(REPOS_SET_STARRED_STATE)
export const setRepoItemLoading = makeSetValueByUidActionCreator(REPO_SET_ITEM_LOADING)


const uids = createReducer([], () => ({
	[REPOS_ADD_ITEMS]: makeAddUidsReducer(),
	[REPOS_RESET_ITEMS]: makeResetValueReducer([])
}))

const byUid = createReducer({}, () => ({
	[REPOS_ADD_ITEMS]: makeAddByUidReducer(),
	[REPO_SET_CONTRIBUTOR_COUNT]: makeSetPropertyValueByUidReducer('contributors'),
	[REPOS_SET_STARRED_STATE]: makeSetPropertyValueByUidReducer('starred'),
	[REPO_SET_ITEM_LOADING]: makeSetPropertyValueByUidReducer('loading'),
	[REPOS_RESET_ITEMS]: makeResetValueReducer({})

}))

export default combineReducers({
	uids,
	byUid
})
