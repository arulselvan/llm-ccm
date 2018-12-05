import React from 'react';
import { View, StyleSheet, Button, TextInput, Alert, AsyncStorage, Image } from 'react-native';
import { Container, Left, Right, Header, H1, Input, Form, Item,Icon} from 'native-base';

import API from '../../api/API';
import axios from 'axios';


export class Login extends React.Component {

    static navigationOptions = {
        title: 'CCM!',
        headerTitleStyle: {
            color: "#A40730"
        },
        headerRight: <Image source={require('../../assets/logo.png')} style={{ width: 60, height: 45 }} />
    };

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

    _signInAsync = async () => {
        console.log('inside signIn!')
        try {
            let userInfo = await API.get('user/' + this.state.userName);

            if (userInfo.data) {
                await AsyncStorage.setItem('userToken', JSON.stringify(userInfo.data))
                this.props.navigation.navigate('App');
            } else {
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
                <Form style={{ flex: 1 }}>
                    <View style={styles.form}>
                        <Item style={styles.item}>
                            <Icon
                                style={styles.iconFont}
                                type="MaterialIcons"
                                active
                                name="email"
                            />
                            <Input placeholder='Enter UserName' placeholderTextColor={"#B1E468"}
                               style={styles.input}
                                onChangeText={(userName) => this.setState({ userName })}
                                value={this.state.userName} />
                        </Item>
                        <Item style={styles.item}>
                            <Icon
                                style={styles.iconFont}
                                type="MaterialIcons"
                                active
                                name="lock"
                            />
                            <Input secureTextEntry={true} placeholder='Enter Password' placeholderTextColor={"#B1E468"}
                                style={styles.input}
                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password} />
                        </Item>
                    </View>
                    <Button
                        onPress={() => {
                            this._signInAsync();
                        }}
                        title="Sign In"
                        color="#A40730"
                    />
                </Form>
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
        height: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20
    },
    header: {
        flex: 1,
        alignSelf: 'stretch',
    },
    form: {
        paddingTop: 17,
        borderColor: "transparent",
        backgroundColor: "transparent",
        borderRadius: 7,
        marginBottom: 20
    },
    loginBtn: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#00246a",
        width: "100%",
        borderRadius: 5
    },
    item: {
        backgroundColor: "transparent",
        borderColor: "#A4052E",
        marginBottom: 5
    },
    verifyItem: {
        backgroundColor: "transparent"
    },
    iconFont: {
        color: "#008CBA",
        fontSize: 12
    },
    input: {
        fontSize: 12,
        color: "#A4052E",
        height: 35
    },
    verifyItem: {
        borderRadius: 7,
        borderWidth: 0,
        borderColor: "transparent"
    },
    verifyInput: {
        fontSize: 12,
        color: "blue",
        backgroundColor: "transparent",
        borderRadius: 7,
        borderWidth: 0,
        borderColor: "transparent",
        paddingLeft: 20
    },
    linkBtn: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center"
    }
});
