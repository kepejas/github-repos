import React from 'react'
import styles from "./RepoItem.module.css";
import Octicon, { IssueOpened, Person, RepoForked, Star } from '@githubprimer/octicons-react'
import { Link } from "react-router-dom";


export const RepoCardItem = ({ fullName, description, starred, license, language, stars, forks, contributors, issues, uid, isInList, loading }) => {

	const getStarredRepoColor = starred ? 'darkOrange' : 'black'
	const conditionalLink = !loading ? <Link className={styles.link} to={`/repo/${uid}`}>Repo details</Link> : <span>Loading...</span>

	return (
		<div className={styles.cardStyle}>
			<div className={styles.row}>
				{fullName && <div className={styles.name}>
					{fullName}
				</div>}
				<div className={styles.description}>
					{description}
				</div>
				<span style={{color: getStarredRepoColor}}>
					<Octicon icon={Star}/>
				</span>
			</div>
			<div className={styles.row}>
				<span>{license || '-'}</span>
				<span>{language}</span>
				<span>
					<Octicon verticalAlign={"top"} size={20} style={{marginRight: '4px'}} icon={Star}/>
					<span className={styles.iconPadding}>{stars}</span>
				</span>
				<span>
					<Octicon verticalAlign="top" size={20} style={{marginRight: '4px'}} icon={RepoForked}/><span className={styles.iconPadding}>{forks}</span>
				</span>
				<span>
					<Octicon verticalAlign="top" size={20} style={{marginRight: '4px'}} icon={Person}/>
					<span className={styles.iconPadding}>{loading ? 0 : contributors}</span>
				</span>
				<span>
					<Octicon verticalAlign="top" size={20} icon={IssueOpened}/>
					<span className={styles.iconPadding}>{issues}</span>
				</span>
				<span>
					{isInList && conditionalLink}
				</span>
			</div>
		</div>
	)

}
