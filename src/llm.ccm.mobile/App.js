import React from 'react';
import { StyleSheet, Text, View, TextInput,Button , Alert ,Image } from 'react-native';
import { Login } from './components/auth/Login';
import Navigation  from './components/navigation/AppNavigation';
import Expo from "expo";
import { Container,SafeAreaView } from 'native-base';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { mobile: 'Enter Mobile Number', password:'Enter Password', isReady  :false };
  }
  
  onSubmit = function(){

  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }


  render() {
    /*return (
      /*<View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.header}>Welcome to CCM!</Text>
        <Login></Login>
      </View>
   
      
    );*/

    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return ( 
        <Navigation />
    )
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
