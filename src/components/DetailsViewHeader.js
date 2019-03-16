import React from 'react'
import styles from "./DetailsViewHeader.module.css";

export const DetailsHeaderView = ({ onStarClick, fullName, starred }) => {
	const buttonName = starred ? 'Unstar' : 'Star'

	return (
		<div className={styles.header}>
			<h1 className={styles.name}>{fullName}</h1>
			<div>
				<button type={"button"} onClick={() => onStarClick(fullName, starred)}>{buttonName}</button>
			</div>
		</div>
	)

}
