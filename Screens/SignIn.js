import React, {Component} from 'react';
import {
	StyleSheet,
	TextInput,
	View,
	ImageBackground,
	Image,
	TouchableOpacity,
	KeyboardAvoidingView,
	Text,
	Keyboard,
	AsyncStorage
} from 'react-native';
import {colors} from '../assets/styletile';
import Button from '../Components/Button';
import InputBox from '../Components/InputBox';
import logo from '../assets/logo.png';
import BoldText from '../Components/BoldText';
import ScreenBackground from '../Components/ScreenBackground';
import Toast from 'react-native-simple-toast';
import axios from 'axios';

class SignIn extends Component {

	constructor(props) {
		super(props)
		this.state = {
			user: '',
			password: '',
			data: [],
			isLoading: false
		}
		// const that = this;
		// AsyncStorage.getItem('data').then((data) => {
		// 	this.setState({isLoading: true});
		// 	let abc = JSON.parse(data);
		//
		// });

	}

	LoginMethod() {
		Keyboard.dismiss();
		if (this.state.user != "" && this.state.password != "") {

			axios.defaults.headers = {
				'Content-Type': 'application/json',
				'token': '30f5602eb5570dc0997b93f66c8ed82d35b0c536'
			}
			axios.post('https://claritytxt.com/wp-content/themes/api/index.php?action=login', {email: this.state.user, password: this.state.password})
				.then(response => {


					if (response.data.success) {
						this.setState({data: response.data.responseData});
						Toast.show("Logged In", 500);
						// var user = [];
						// this.state.data.map(response => {
						//     // user = [response.data.responseData.user_id,response.data.responseData.email_address,response.data.responseData.name,response.data.responseData.display_name,response.data.responseData.user_nicename,response.data.responseData.session_id],
						//         // AsyncStorage.setItem('data', JSON.stringify(user)),
						//         this.props.navigation.navigate('Dashboard' )
						// })
						this.props.navigation.navigate('Dashboard')
					} else {
						Toast.show(response.data.message);
					}
				}).catch(function (error) {
				Toast.show(response.data.message);
			});

		} else {
			return Toast.show('Enter User Name or User Email and Password', 500);
		}
	}

	render() {
		return (
			<ScreenBackground>

				<InputBox onChangeText={user => this.setState({user: user})} label='Username' placeholder="Name"/>
				<InputBox onChangeText={password => this.setState({password: password})} label='Password' placeholder="Password" type='password'/>
				<Button text='Sign In' onPress={this.LoginMethod.bind(this)}/>
				<BoldText boldText='Forgot password?'
				          style={{justifyContent: 'flex-end', paddingRight: '10%'}}
				/>
				<BoldText text="Don't have an account?" boldText="Sign Up" navigate='SignUp' navigation={this.props.navigation}
				          style={{
					          padding: 15,

				          }}/>
			</ScreenBackground>
		);
	}
}


export default SignIn;
