export const makeAddItemsByUidActionCreator = (type) => (
	uids,
	items
) => ({
	type,
	uids,
	items
})

export const makeSetValueByUidActionCreator = (type) => (
	uid,
	value
) => ({
	type,
	uid,
	value
})

export const makeResetValueActionCreator = (type) => (
	value
) => ({
	type,
	value
})

export const makeSetValueActionCreator = (type) => (
	value
) => ({
	type,
	value
})
