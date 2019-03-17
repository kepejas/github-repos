import React, { PureComponent } from 'react';
import {
	AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

export default class Chart extends PureComponent {
	render() {
		return (
			<AreaChart
				width={1000}
				height={400}
				data={this.props.data}
				margin={{
					top: 10, right: 30, left: 0, bottom: 0,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="weekNo" />
				<YAxis />
				<Tooltip />
				<Area type="monotone" dataKey="commits" stroke="#8884d8" fill="#8884d8" />
			</AreaChart>
		);
	}
}
