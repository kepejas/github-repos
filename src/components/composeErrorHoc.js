import React from "react";

export const composeError = (Component) => ({ error, ...props }) => (
	error ? <div style={{color: 'red'}}>{error}</div> : <Component {...props} />
)
