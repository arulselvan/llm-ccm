import React from 'react';
import { createSwitchNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { SideBar } from '../SideBar';
import { Login } from '../auth/Login';
import { SoulAttendance } from '../carecell/SoulAttendance';
import { Home } from '../Home';
import { AuthLoading } from '../auth/AuthLoading';
import { LeaderAttendance } from '../carecell/LeaderAttendance';
import { Leader } from '../carecell/Leader';
import { PrayerRequest } from '../carecell/PrayerRequest';

const appStack = createDrawerNavigator(
    {
        Home: { screen: Home },
        Soul: { screen: SoulAttendance },
        Leader: {screen:Leader},
        PrayerRequest : {screen:PrayerRequest}
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


