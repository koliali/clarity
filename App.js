import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SplashScreen from './Screens/SplashScreen';
import SignIn from './Screens/SignIn';
import ScreenBackground from './Components/ScreenBackground';
import SignUp from './Screens/SignUp';
import Dashboard from './Screens/Dashboard';

const switchNavigator = createSwitchNavigator({
		SplashScreen,
		SignIn,
		SignUp,
		Dashboard
	},
	{
		initialRouteName: 'SplashScreen'
	}
)

const AppContainer = createAppContainer(switchNavigator);

class App extends Component {
	render() {
		return <AppContainer/>;
	}
}

export default App;
