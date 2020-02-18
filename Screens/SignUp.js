import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, Image, TouchableWithoutFeedback, ScrollView, Keyboard} from 'react-native';
import ScreenBackground from '../Components/ScreenBackground';
import { colors } from '../assets/styletile';
import Button from '../Components/Button';
import InputBox from '../Components/InputBox';
import logo from '../assets/logo.png';
import BoldText from '../Components/BoldText';
import axios from "axios";
import Toast from "react-native-simple-toast";


class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            email_address: '',
            phone: '',
            first_name: '',
            last_name: '',
            password: '',
            cpassword: '',
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

    SignupMethod() {
        Keyboard.dismiss();
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'token': '30f5602eb5570dc0997b93f66c8ed82d35b0c536'
            }
            axios.post('https://claritytxt.com/wp-content/themes/api/index.php?action=register',
                {
                    "user_name":this.state.user_name,
                    "email_address":this.state.email_address,
                    "phone":this.state.phone,
                    "first_name":this.state.first_name,
                    "last_name":this.state.last_name,
                    "password":this.state.password,
                    "cpassword":this.state.cpassword,
                    "image":"",
                    "accept_terms_conditions":"1"
                })
                .then(response => {


                    if (response.data.success) {
                        this.setState({data: response.data.responseData});
                        Toast.show("Registration Successfully we have send verification email", 500);
                        // var user = [];
                        // this.state.data.map(response => {
                        //     // user = [response.data.responseData.user_id,response.data.responseData.email_address,response.data.responseData.name,response.data.responseData.display_name,response.data.responseData.user_nicename,response.data.responseData.session_id],
                        //         // AsyncStorage.setItem('data', JSON.stringify(user)),
                        //
                        // })
                        this.props.navigation.navigate('SignIn')
                    } else {
                        Toast.show(response.data.message);
                    }
                }).catch(function (error) {
                Toast.show(response.data.message);
            });


    }
    render() {
        return (
          <ScreenBackground>
                <ScrollView style={{height:'70%'}}>
                <InputBox onChangeText={user_name => this.setState({user_name: user_name})} label='User Name' placeholder="User Name" />
                <InputBox  onChangeText={email_address => this.setState({email_address: email_address})} label='Email' placeholder="Email"/>
                <InputBox onChangeText={phone => this.setState({phone: phone})} label='Phone' placeholder="Phone" />
                <InputBox onChangeText={first_name => this.setState({first_name: first_name})} label='First Name' placeholder="First Name" />
                <InputBox onChangeText={last_name => this.setState({last_name: last_name})} label='Last Name' placeholder="Last Name" />

                <InputBox onChangeText={password => this.setState({password: password})} label='Password' placeholder="Password" type='password'/>
                <InputBox onChangeText={cpassword => this.setState({cpassword: cpassword})} label='Confirm Password' placeholder="Confirm Password" type='password'/>


                <Button text='Sign Up'  onPress={this.SignupMethod.bind(this)} />
                <BoldText text="Already have an account?" boldText="Sign In"
                navigate='SignIn' navigation={this.props.navigation}
                    style={{
                        padding: 15,

                    }} />
                </ScrollView>
            </ScreenBackground>

        );
    }
}

export default SignUp;
