import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import repoReducer from './../store/repos'
import searchReducer from './../store/search'
import error from './../store/error'
import { commitsData } from './../store/chart'


export default initialState => createStore(
	combineReducers({
		repoReducer,
		searchReducer,
		commitsData,
		error
	}),
	initialState,
	compose(
		applyMiddleware(thunk),
		((typeof window === 'object') && window.devToolsExtension)
			? window.devToolsExtension()
			: (f) => f
	)
)

