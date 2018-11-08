import React from 'react';
import { View, StyleSheet, Button, TextInput, Alert, AsyncStorage, Image } from 'react-native';
import { Container, Left, Right, Header,H1 } from 'native-base';

import API from '../../api/API';
import axios from 'axios';


export class Login extends React.Component {

    static navigationOptions = {
        title: 'CCM!',
        headerTitleStyle: {
            color:"#A40730"
        },
        headerRight:<Image source={require('../../assets/logo.png')} style={{ width: 60,height:45 }} />
    };

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

    _signInAsync = async () => {
        try {
            let userInfo = await API.get('user/' + this.state.userName);
            if(userInfo.data){
                await AsyncStorage.setItem('userToken', JSON.stringify(userInfo.data))
                this.props.navigation.navigate('App');
            }else{
                alert("Pls check User Name");
            }
           
        }
        catch (error) {
            console.log(error);
        }

    };

    render() {
        return (
            <View style={styles.loginContainer}>
                <Image source={require('../../assets/title.png')} style={{ width: undefined }} />
                
                <TextInput placeholder='Enter UserName'
                    style={{ height: 40, marginBottom: 20 }}
                    onChangeText={(userName) => this.setState({ userName })}
                    value={this.state.userName} />

                <TextInput secureTextEntry={true} placeholder='Enter Password'
                    style={{ height: 40,  marginBottom: 20 }}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password} />

                <Button
                    onPress={() => {
                        this._signInAsync();
                    }}
                    title="Sign In"
                    color="#A40730"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 4,
        borderColor: '#d6d7da',
        maxHeight: 500,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20
    },
    header:{
        flex: 1,
    alignSelf: 'stretch',
    }
});
