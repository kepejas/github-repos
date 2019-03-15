import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createDebounce from 'redux-debounced'
import repoReducer from './../store/repos'
import { listLoading } from './../store/search'



export default initialState => createStore(
	combineReducers({
		repoReducer,
		listLoading
	}),
	initialState,
	compose(
		applyMiddleware(createDebounce(), thunk),
		((typeof window === 'object') && window.devToolsExtension)
			? window.devToolsExtension()
			: (f) => f
	)
)

