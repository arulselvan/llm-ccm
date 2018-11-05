import React, { Component } from 'react';
import { Container, View , H1} from 'native-base';
import {AppHeader} from './common/AppHeader'

export class Home extends Component {

    render() {
        return (
            <Container>
                <AppHeader navigation={this.props.navigation} title={'Home'}/>
                <H1>Welcome to CCM</H1>             
            </Container>

        )
    }
}