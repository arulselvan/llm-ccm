import React, { Component } from 'react';
import {Text, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export class AppHeader extends Component {
  render() {
    return (
        <Header style={{paddingTop:30,height:80,backgroundColor:'#A40730'}}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' onPress={()=>this.props.navigation.goBack()}/>
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right>
          <Button transparent>
              <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()}/>
            </Button>
          </Right>
        </Header>
    );
  }
}