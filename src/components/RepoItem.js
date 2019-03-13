import React from 'react'
import Octicon, {RepoForked, PrimitiveDot, Star, IssueOpened} from '@githubprimer/octicons-react'

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
	textAlign: 'start'
};


const marginRight = {
	marginRight: '1em'
};

const row = {
	display: 'flex',
	flexDirection: 'row'
};

const RepoItem = ({children, title, description, onClick }) => (
	<div style={cardStyle}>
		<div style={row}>
			<div style={marginRight}>{title}</div>
			<div style={{...descriptionStyle, ...marginRight}}>very long description very very very very</div>
			<button onClick={onClick}><Octicon icon={Star}/></button>

		</div>
		<div style={row}>
			<span style={marginRight}><Octicon icon={PrimitiveDot}/></span>
			<span style={marginRight}><Octicon icon={RepoForked}/> 1</span>
			<span style={marginRight}><Octicon icon={RepoForked}/> 1</span>
			<span style={marginRight}><Octicon icon={IssueOpened}/> 1</span>
		</div>
	</div>
);

export default RepoItem
