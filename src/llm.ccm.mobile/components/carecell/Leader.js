import React, { Component } from 'react';
import { Container, View , H1} from 'native-base';
import {AppHeader} from '../common/AppHeader';

export class Leader extends Component {

    render() {
        return (
            <Container>
                <AppHeader navigation={this.props.navigation} title={'Leader'}/>
                <H1>Leader Screen!</H1>             
            </Container>

        )
    }
}