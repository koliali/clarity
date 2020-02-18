import React, { Component } from 'react';
import {TouchableOpacity,View,Text,TouchableWithoutFeedback} from 'react-native';
import {colors} from '../assets/styletile'

class Button extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
            <View
            style={{
                backgroundColor: colors.backgroundDark,
              padding: 10,
              width:'80%',
              height:45,
              borderRadius: 5,
              marginTop: 20,
              alignSelf:'center',
                ...this.props.style
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                alignSelf: "center"
              }}
            >
              {this.props.text}
            </Text>
          </View>
          </TouchableWithoutFeedback>
        );
    }
}

export default Button;
