import React, { Component } from 'react';
import { Text, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export class AppHeader extends Component {
  render() {

    let action = this.props.action ?  <Button transparent onPress={this.props.action}>
    <Icon active name='md-save' />
  </Button>: null;

    return (
      <Header style={{ paddingTop: 30, height: 80, backgroundColor: '#A40730' }}>
        <Left>
          <Button transparent>
            <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
         {action}
        </Right>
      </Header>
    );
  }
}