import React from 'react';
import { StyleSheet, Text, View, TextInput,Button , Alert } from 'react-native';

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
        <Text>Welcome to LLM CCM!</Text>
        
        <TextInput
        style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.mobile}/>  

        <TextInput
        style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
