import React from 'react'
import Chartify from 'chartify';
import styles from './Chart.module.css'

export const ChartsComponent = ({ data, config }) => {

	const basicConfig = {
		theme: 'blue',
		width: 50,
		height: 10,
		box_size: 20,
		box_radius: 8,
		line: true,
		line_only: false,
		bordered: false
	};

	return (
		<div className={styles.cardStyle}>
			<h4>Effectife hours spent per year</h4>
			<div>
				<Chartify
					data={[{
						x_value: '20.11.2016',
						y_value: 5,
						title: '007 Spectre'
					}]}
			        container={styles.cardStyle}
					config={{...basicConfig, ...config}}
				/>
			</div>
		</div>
	)

}
