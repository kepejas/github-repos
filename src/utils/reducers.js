export const makeActionCreator = (type, ...argNames) => {
	return function(...args) {
		const action = { type }
		argNames.forEach((arg, index) => {
			action[argNames[index]] = args[index]
		})
		return action
	}
}

export const createReducer = (initialState, handlers) => {
	return function reducer(state = initialState, action) {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action)
		} else {
			return state
		}
	}
}

export const makeSetValueReducer = () => (action) => action.value


export const debounceAction = (
	action,
	time,
	key
) => (

	Object.assign(action, {
			meta: {
				debounce: {
					time,
					key
				}
			}
		}
	)
)
