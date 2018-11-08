import React from 'react';
import { AsyncStorage, Dimensions, Platform, Image } from 'react-native';
import {
    Button,
    Text,
    Container,
    List,
    ListItem,
    Content,
    Icon,
    Right, Left, Body, Separator
} from "native-base";

const careCellRoutesDataList = [
    {
        text: "Souls Attendance",
        route: "Soul",
        icon: "md-people"
    },
    {
        text: "Leaders Attendance",
        route: "Leader",
        icon: "md-man"
    },
    {
        text: "Church Service Attendance",
        route: "ChurchService",
        icon: "arrow-forward"
    },
    {
        text: "Prayer Request",
        route: "PrayerRequest",
        icon: "md-help-circle"
    },
    {
        text: "House Visit",
        route: "HouseVisit",
        icon: "md-home"
    }
]

const drawerCover = require("../assets/logo.png");

export class SideBar extends React.Component {

    constructor(props) {
        super(props);
    }

    _signOutAsync = async () => {
        await AsyncStorage.setItem('userToken', '');
        this.props.navigation.navigate('Auth');
    };

    goTo = (routeName) => {
        this.props.navigation.navigate(routeName)
    }

    render() {

        let careCellRoutes = null;

        if (careCellRoutesDataList.length > 0) {
            careCellRoutes = careCellRoutesDataList.map((routeDetail, index) => {
                return (
                    <ListItem key={index} icon onPress={() => this.goTo(routeDetail.route)}>
                        <Left>
                            <Button style={{ backgroundColor: "#9ECC5A" }}>
                                <Icon active name={routeDetail.icon} />
                            </Button>
                        </Left>
                        <Body>
                            <Text style={styles.listItemText}>{routeDetail.text}</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                )
            })
        }

        return (
            <Container>
                <Content bounces={false}
                    style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>

                    <Content style={styles.drawerCover}>
                        <Text style={{ paddingTop: 100, textAlign: "left" }}>
                            Welcome User!
                        </Text>
                        <Button title="Logout" style={{ paddingTop: 100, backgroundColor: "red" }} onPress={() => this._signOutAsync()}>

                        </Button>
                    </Content>

                    <Image source={require('../assets/logo.png')} square style={styles.drawerImage} />
                    <List>
                        <Separator bordered>
                            <Text>Care Cell</Text>
                        </Separator>
                        {careCellRoutes}
                        <Separator bordered>
                            <Text>Region</Text>
                        </Separator>
                        <ListItem button onPress={() => this._signOutAsync()} >
                            <Text>LogOut</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


const styles = {
    drawerCover: {
        alignSelf: "stretch",
        height: deviceHeight / 4.5,
        width: null,
        position: "relative",
        marginBottom: 10
    },
    drawerImage: {
        position: "absolute",
        left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
        top: Platform.OS === "android" ? deviceHeight / 16 : deviceHeight / 12,
        width: 210,
        height: 60,
        resizeMode: "cover"
    },
    listItemText: {
        fontSize: 12,
        color: '#0089B7'
    }
}