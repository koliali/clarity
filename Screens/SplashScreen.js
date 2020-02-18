import React, { Component } from 'react';
import { View, Image, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import logo from '../assets/logo.png';
import {colors} from '../assets/styletile';
import background from '../assets/background.jpg';

class SplashScreen extends Component {
    componentDidMount = () => {
        setTimeout(() => {
            this.props.navigation.navigate("SignIn");
        }, 3000);
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.image} />
                <ActivityIndicator size="large" color={colors.textDark} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundDark,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        marginTop:20,
        width: '80%',
        resizeMode: 'contain'
    }
});

export default SplashScreen;