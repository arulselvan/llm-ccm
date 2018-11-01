import React, { Component } from 'react';
import { Container, View , H1} from 'native-base';
import {AppHeader} from '../common/AppHeader';

export class PrayerRequest extends Component {

    render() {
        return (
            <Container>
                <AppHeader navigation={this.props.navigation} title={'Prayer Request'}/>
                <H1>Prayer Request Screen</H1>             
            </Container>

        )
    }
}