import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {colors} from '../assets/styletile';

import Button from '../Components/Button';
import InputBox from '../Components/InputBox';
import logo from '../assets/logo.png';
import BoldText from '../Components/BoldText';
import ScreenBackground from '../Components/ScreenBackground';


class Dashboard extends Component {
	render() {
		return (
			<ScreenBackground>

				<BoldText boldText='I am on Dashboard'
				          style={{justifyContent: 'flex-end', paddingRight: '10%'}}
				/>

			</ScreenBackground>
		);
	}
}

export default Dashboard;
