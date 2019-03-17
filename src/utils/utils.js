import * as moment from 'moment'

export const GITHUB_API = 'https://api.github.com'

export const debounce = (fn, time) => {
	let timeout;

	return function() {
		const functionCall = () => fn.apply(this, arguments);

		clearTimeout(timeout);
		timeout = setTimeout(functionCall, time);
	}
}


export const unixToJsDate = (date) => (
	moment.unix(date).format("W")
)
