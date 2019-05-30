import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class WOWScreen extends React.Component {
	static navigationOptions = {
		title: 'Links',
	};

	render() {
		return (
			<View>
				<Text>Neato</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff',
	},
});
