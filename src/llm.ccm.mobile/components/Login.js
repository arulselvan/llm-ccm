import React from 'react';
import {View,StyleSheet,Button,TextInput,Alert} from 'react-native';

export class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userName:'',
            password:''
        }
    }

    render(){
        return (
            <View style={styles.loginContainer}>
                <TextInput placeholder='Enter UserName'
                style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1, marginBottom:20}}
                onChangeText={(userName) => this.setState({userName})}
                value={this.state.userName}/>  

                <TextInput secureTextEntry={true} placeholder='Enter Password'
                style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1,marginBottom:20}}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}/>   

                <Button
                    onPress={() => {
                        Alert.alert('You tapped the button!');
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
      maxHeight:200
    },
  });
  