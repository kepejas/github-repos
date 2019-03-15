import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
import repoReducer from './../store/repos'
import { listLoading } from './../store/search'

export const history = createHistory()

const rootReducer = combineReducers({
	repoReducer,
	listLoading
})

export default initialState => createStore(
	connectRouter(history)(rootReducer),
	initialState,
	compose(
		applyMiddleware(thunk, routerMiddleware(history)),
		((typeof window === 'object') && window.devToolsExtension)
			? window.devToolsExtension()
			: (f) => f
	)
)

