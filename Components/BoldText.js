import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../assets/styletile';

class BoldText extends Component {
    render() {
        return (
            <View style={{
                flexDirection:'row', 
                justifyContent:'center', 
                marginTop:20,
                width:'100%',               
                ...this.props.style
                }}>
                <Text style={{color:'white'}}>{this.props.text}</Text>
                <Text 
                style={{fontWeight:'bold', marginLeft:5, color:colors.textDark}}
                onPress={() =>this.props.navigation.navigate(this.props.navigate)}
                >{this.props.boldText}</Text>
            </View>
        );
    }
}

export default BoldText;