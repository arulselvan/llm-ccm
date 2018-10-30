import React from 'react';
import {View,StyleSheet,Button,TextInput,Alert, AsyncStorage,Image } from 'react-native';

export class Login extends React.Component{

    static navigationOptions = {
        title: 'Please sign in',
    };

    constructor(props){
        super(props);
        this.state = {
            userName:'',
            password:''
        }
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    render(){
        return (
            <View style={styles.loginContainer}>
                <Image source={require('../../assets/logo.png')} style={{ width: undefined}} />
                <TextInput placeholder='Enter UserName'
                style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom:20}}
                onChangeText={(userName) => this.setState({userName})}
                value={this.state.userName}/>  

                <TextInput secureTextEntry={true} placeholder='Enter Password'
                style={{height: 40, borderColor: 'gray', borderWidth: 1,marginBottom:20}}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}/>   

                <Button
                    onPress={() => {
                        this._signInAsync();
                    }}
                    title="Submit"
                    color="#841584"
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
      maxHeight:500,
      paddingLeft:10,
      paddingRight:10,
      paddingTop:20
    },
  });
  