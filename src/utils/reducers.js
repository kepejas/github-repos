export const makeActionCreator = (type) => (
	value
) => ({
	type,
	value
})

export const createReducer = (
	defaultState,
	reducerFactory
) => (
	state = defaultState,
	action
) => {

	const reducer = reducerFactory(state)[action.type]
	if (!reducer) {
		return state
	}

	return reducer(action, state)
}

export const makeSetValueReducer = () => (action) => action.value

export const makeSetPropertyValueByUidReducer = (property) => (
	{uid, value}, state
) => {
	const item = state[uid]

	if (!item) {
		return state
	}

	return {
		...state,
		[uid]: {
			...item,
			[property]: value
		}
	}
}

export const makeAddUidsReducer = () => (
	{ uids }, state
) => (
	state.concat(uids)
)


export const makeAddByUidReducer = () => ({ uids, items }, state) => {

	let newState = { ...state }

	uids.forEach((uid, i) => {
	newState[uid] = items[i]
})
	return newState
}
