import React from 'react'
import styles from "./DetailsViewHeader.module.css";



export const DetailsHeaderView = ({ onStarClick, fullName, match }) => {

	return (
		<div className={styles.header}>
			<h1 className={styles.name}>{fullName}</h1>
			<button type={"button"} onClick={onStarClick}>Star / Unstar</button>
		</div>
	)

}
