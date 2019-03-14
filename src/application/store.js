import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createDebounce from 'redux-debounced'
import repoReducer from './../store/repos'
import repos from "../store/repos";


export default initialState => createStore(
	combineReducers({
		repos,
		repoReducer
	}),
	initialState,
	compose(
		applyMiddleware(createDebounce(), thunk),
		((typeof window === 'object') && window.devToolsExtension)
			? window.devToolsExtension()
			: (f) => f
	)
)

