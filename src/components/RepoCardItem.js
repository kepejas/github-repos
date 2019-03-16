import React from 'react'
import styles from "./RepoItem.module.css";
import Octicon, { IssueOpened, Person, RepoForked, Star } from '@githubprimer/octicons-react'
import { Link } from "react-router-dom";

const descriptionStyle = {
	flexGrow: '1',
	textAlign: 'start',
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
};

const marginRight = {
	marginRight: '2em'
};

const row = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center'
};

export const RepoCardItem = ({ fullName, description, starred, license, language, stars, forks, contributors, issues, uid, isInList }) => {
	const getStarredRepoColor = starred ? 'darkOrange' : 'black'
	return (
		<div className={styles.cardStyle}>
			<div className={styles.row}>
				{fullName && <div className={styles.name} style={marginRight}>{fullName}</div>}
				<div style={{...descriptionStyle, ...marginRight}}>{description}</div>
				<span style={{color: getStarredRepoColor}}>
					<Octicon icon={Star}/>
				</span>
			</div>
			<div style={row}>
				<span style={marginRight}>{license}</span>
				<span style={marginRight}>{language}</span>
				<span style={marginRight}>
					<Octicon style={{marginRight: '4px'}} icon={Star}/>{stars}</span>
				<span style={marginRight}>
					<Octicon style={{marginRight: '4px'}} icon={RepoForked}/>{forks}</span>
				<span style={marginRight}>
					<Octicon style={{marginRight: '4px'}} icon={Person}/>
					<span>{contributors || '-'}</span>
				</span>
				<span style={marginRight}>
					<Octicon icon={IssueOpened}/><span>{issues}</span>
				</span>
				<span style={marginRight}>
					{isInList && <Link to={`/repo/${uid}`}>Repo details</Link>}
				</span>
			</div>
		</div>
	)

}
