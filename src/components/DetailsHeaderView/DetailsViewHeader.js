import React from 'react'
import styles from "./DetailsViewHeader.module.css";

export const DetailsHeaderView = ({ onStarClick, fullName, starred }) => {
	const buttonName = starred ? 'Unstar' : 'Star'

	return (
		<div className={styles.header}>
			<h4 className={styles.name}>{fullName}</h4>
			<div className={styles.buttonWrapper}>
				<button className={styles.buttonWrapper} type={"button"} onClick={() => onStarClick(fullName, starred)}>{buttonName}</button>
			</div>
		</div>
	)

}
