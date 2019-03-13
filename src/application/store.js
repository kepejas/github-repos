import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createDebounce from 'redux-debounced'
import repos from './../repos/'

export default initialState => createStore(
	combineReducers({
		repos
	}),
	initialState,
	compose(
		applyMiddleware(createDebounce(), thunk),
		((typeof window === 'object') && window.devToolsExtension)
			? window.devToolsExtension()
			: (f) => f
	)
)
