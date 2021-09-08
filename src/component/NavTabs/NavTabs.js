import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import MyTimeline from '../MyTimeline/MyTimeline';
import Leaderboard from '../Leaderboard/Leaderboard';

const styles = {
	headline: {
		fontSize: 24,
		paddingTop: 16,
		marginBottom: 12,
		fontWeight: 400,
		color: 'green',
	},
};

export default class NavTabs extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: 'None',
		};
	}
	handleChange = (_, value) => {
		this.setState({
			value,
		});
	};

	render() {
		return (
			<div>
				<Tabs
					value={this.state.value}
					onChange={this.handleChange}
					indicatorColor="primary"
					textColor="primary"
					centered="true">

					<Tab label="Tab A" value="Tab A" to="/leaderboard">	 </Tab>
					<Link to="/arena"> <Tab label="Tab AA" value="Tab A" /> </Link>

					<Tab label="Tab B" value="Tab B" />
				</Tabs>
				<br></br>
				<p style={styles.headline}>
					Currently Active Tab: {this.state.value}
				</p>
			</div>
		);
	}
}
