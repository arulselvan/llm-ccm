import React, { Component } from 'react';
import { Text, View , H1} from 'native-base';
import {AppHeader} from './common/AppHeader'

export class Home extends Component {

    render() {
        return (
            <View>
                <AppHeader/>
                <H1>Wlecome to LLM CCM!</H1>
            </View>
        )
    }
}