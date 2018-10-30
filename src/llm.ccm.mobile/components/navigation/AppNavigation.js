import React from 'react';
import { createSwitchNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { SideBar } from '../SideBar';
import { Login } from '../auth/Login';
import { SoulAttendance } from '../soul/SoulAttendance';
import { Home } from '../Home';
import { AuthLoading } from '../auth/AuthLoading';

const appStack = createDrawerNavigator(
    {
        Home: { screen: Home },
        Soul: { screen: SoulAttendance }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

const authStack = createStackNavigator({ Login: Login })

export default createSwitchNavigator({
    AuthLoading: AuthLoading,
    App: appStack,
    Auth: authStack
}, { initialRouteName: 'AuthLoading' })


