import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors } from '../assets/styletile';

class InputBox extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <Text style={styles.label}>
                    {this.props.label}
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.type === 'password' ? true : false}
                    onChangeText={this.props.onChangeText   }
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 20,
    },

    input: {
        paddingLeft: 10,
        paddingRight: 10,
        color: colors.primary,
        height: 40,
        borderColor: colors.border,
        borderBottomWidth: 2,
        color:'white'
    },
    label:{
        color:colors.textDark,
        fontSize:18,
        fontWeight:'bold'
    }
});

export default InputBox;
