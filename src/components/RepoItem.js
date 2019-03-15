import React, { PureComponent } from 'react'
import { func } from 'prop-types'
import Octicon, {RepoForked, Star, IssueOpened, Person} from '@githubprimer/octicons-react'

const cardStyle = {
	display: 'flex',
	position: 'relative',
	background: '#fff',
	boxShadow: '0 1px 2px 0 rgba(34,36,38,.15)',
	margin: '1rem 2rem',
	padding: '1em 1em',
	border: '1px solid rgba(34,36,38,.15)',
	flexDirection: 'column'
};

const descriptionStyle = {
	flexGrow: '1',
	textAlign: 'start',
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
};

const name = {
	fontWeight: 600
}


const marginRight = {
	marginRight: '1em'
};

const row = {
	display: 'flex',
	flexDirection: 'row'
};


export default class RepoItem extends PureComponent {

	componentDidMount() {
		const { onAttach, fullName } = this.props
		onAttach(fullName)
	}

	render() {
		const {fullName, description, license, url, language, stars, forks, issues, starred, contributors } = this.props

		return (
			<div style={cardStyle}>
				<div style={row}>
					<div style={{...marginRight, ...name}}>{fullName}</div>
					<div style={{...descriptionStyle, ...marginRight}}>{description}</div>
					<Octicon icon={Star} /> {!starred && <span>!Starred</span>}

				</div>
				<div style={row}>
					<span style={marginRight}>{license}</span>
					<span style={marginRight}>{language}</span>
					<span style={marginRight}><Octicon icon={Star}/>{stars}</span>
					<span style={marginRight}><Octicon icon={RepoForked}/>{forks}</span>
					<span style={marginRight}><Octicon icon={Person}/>{contributors || '-'}</span>
					<span style={marginRight}><Octicon icon={IssueOpened}/>{issues}</span>
					<span style={marginRight}><a href={url} rel="noopener noreferrer">Link to repo</a></span>
				</div>
			</div>
		)
	}
}

RepoItem.propTypes = {
	onAttach: func
}
