import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image,ImageBackground, Dimensions } from 'react-native';
import logo from '../assets/logo.png';
import { colors } from '../assets/styletile';
import background from '../assets/background.jpg';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


class ScreenBackground extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Image source={logo}
                    style={{
                        resizeMode: 'contain',
                        width: '50%',
                        height: '15%',
                        margin: 5
                    }}
                />
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 26,
                        marginLeft: 10,
                        marginBottom: 10
                    }}
                >Welcome</Text>
               
                <ImageBackground
                    source={background}
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                >
                     <View style={{backgroundColor:'#000000a0'}}>
                    {this.props.children}
                    </View>
                </ImageBackground>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: width,
        backgroundColor: colors.backgroundDark
    }
});

export default ScreenBackground;