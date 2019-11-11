import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class DeckItem extends Component {
	render() {
		return (

           
			<TouchableOpacity style={styles.item} onPress={this.props.showDetail}>
				<View>
					<Text style={styles.itemHeader}>{this.props.title}</Text>
				</View>
			</TouchableOpacity>
           
		);
	}
}

const styles = StyleSheet.create({
	item: {
		alignSelf: 'stretch',
		borderWidth: 1,
		padding: 10,
		borderRadius: 8,
		margin: 20,
		
	},
	itemHeader: {
		textAlign: 'center',
		fontSize: 20,
		color: 'black'
	},
});

export default DeckItem;