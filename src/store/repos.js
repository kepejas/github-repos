import {
	createReducer,
	makeAddByUidReducer,
	makeAddUidsReducer,
	makeSetPropertyValueByUidReducer
} from "../utils/reducers";
import { makeAddItemsByUidActionCreator } from "../utils/actionCreators";
import { combineReducers } from "redux";

export const REPOS_ADD_ITEMS = 'REPOS_ADD_ITEMS'
export const REPOS_SET_NAME = 'REPOS_SET_NAME'
export const REPOS_SET_DESCRIPTION = 'REPOS_SET_DESCRIPTION'
export const REPOS_SET_LICENCE_TYPE = 'REPOS_SET_LICENCE_TYPE'
export const REPOS_SET_LINK_TO_REPO = 'REPOS_SET_LINK_TO_REPO'
export const REPOS_SET_STARRED_STATE = 'REPOS_SET_STARRED_STATE'
export const REPOS_SET_LANGUAGE = 'REPOS_SET_LANGUAGE'
export const REPO_SET_CONTRIBUTOR_COUNT = 'REPO_SET_CONTRIBUTOR_COUNT'
export const REPO_SET_STARS_COUNT = 'REPO_SET_STARS_COUNT'
export const REPO_SET_FORK_COUNT = 'REPO_SET_FORK_COUNT'
export const REPO_SET_NUMBER_OF_ISSUES = 'REPO_SET_NUMBER_OF_ISSUES'

export const addMultipleRepos = makeAddItemsByUidActionCreator(REPOS_ADD_ITEMS)



const uids = createReducer([], () => ({
	[REPOS_ADD_ITEMS]: makeAddUidsReducer(),
}))

const byUid = createReducer({}, () => ({
	[REPOS_ADD_ITEMS]: makeAddByUidReducer(),
	[REPO_SET_CONTRIBUTOR_COUNT]: makeSetPropertyValueByUidReducer('contributors')
}))

export default combineReducers({
	uids,
	byUid
})
