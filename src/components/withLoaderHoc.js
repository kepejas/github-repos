import React from 'react'

export const withLoader = (Component) => ({ loading, ...props }) => (
	loading ? <div>Loading...</div> : <Component {...props} />
)
