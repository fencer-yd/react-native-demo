import React from 'react';
import {View, Text, TextInput, KeyboardAvoidingView, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
	container: {
		flex: 1,
        alignItems: "center",
        backgroundColor: "#F5FCFF",
		width: '100%',
		height: '100%',
	},
	textLogo: {
		color: '#666666',
		textAlign: 'center',
		fontSize: 50,
		marginTop: 50,
	},
	username: {
		width: 300,
		height: 50,
		marginTop: 100,
		padding: 15,
		textAlign: 'left',
		borderWidth: 1,
		borderColor: '#eee',
		textAlignVertical: 'top',
		backgroundColor: "#fff",
	},
	password: {
		width: 300,
		height: 50,
		marginTop: 50,
		padding: 15,
		textAlign: 'left',
		borderWidth: 1,
		borderColor: '#eee',
		textAlignVertical: 'top',
		backgroundColor: "#fff",
	},
	login: {
		width: 300,
		height: 50,
		marginTop: 50,
		backgroundColor: '#A2E563',
		padding: 15,
		borderRadius: 5
	}
});

const show = () => {
	Actions.home({
		data: 11,
		title: '11111'
	})
}

class Launch extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			username: '',
			password: ''
		};
	}

	render(){
		return (
			<View {...this.props}  style={styles.container}>
				<KeyboardAvoidingView behavior={this.state.behavior}>
					<Text style={styles.textLogo}>兰州银行</Text>	
					<TextInput 
						underlineColorAndroid="transparent"
						onChangeText={(username) => this.setState({username})}
						value={this.state.username} 
						style={styles.username} />
					<TextInput 
						underlineColorAndroid="transparent"
						secureTextEntry={true}
						onChangeText={(password) => this.setState({password})}
						value={this.state.password} 
						style={styles.password} />
					<Button style={styles.login} onPress={show}>登录</Button>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

module.exports = Launch;