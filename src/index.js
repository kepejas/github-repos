import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './application/App';
import { Provider } from 'react-redux'
import createStore from './application/store';

ReactDOM.render(
	<Provider store={createStore()}>
		<App />
	</Provider>,
	document.getElementById('root')
);
