import { loadCurrentSearchQuery } from "../store/search";

export const searchThunk = (query) => (
	dispatch
) => {
	const searchQuery = query.trim()
	if(searchQuery && searchQuery.length > 1) {
		dispatch(loadCurrentSearchQuery(searchQuery))
	}
}
