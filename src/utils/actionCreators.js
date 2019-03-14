export const makeAddItemsByUidActionCreator = (type) => (
	uids, items
) => ({
	type,
	uids,
	items
})
