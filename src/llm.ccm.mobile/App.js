import React from 'react';
import { StyleSheet, Text, View, TextInput,Button , Alert ,Image } from 'react-native';
import { Login } from './components/Login';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { mobile: 'Enter Mobile Number', password:'Enter Password' };
  }
  
  onSubmit = function(){

  }


  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.header}>Welcome to CCM!</Text>

        <Login></Login>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:18,
    marginTop:0,
    marginBottom:20
  },
  logo:{
    
  }
});
