import React from 'react';
import {AsyncStorage} from 'react-native';
import {
    Button,
    Text,
    Container,
    List,
    ListItem,
    Content,
    Image,View
    
} from "native-base";

const careCellRoutes = ["Home", "Soul", "Leaders", "House Visit", "Prayer Request", "Church Service"];

export class SideBar extends React.Component {

    constructor(props) {
        super(props);
    }

    _signOutAsync = async () => {
        await AsyncStorage.setItem('userToken', '');
        this.props.navigation.navigate('Auth');
    };

    render() {
        return (
            <Container>
                <Content style={{paddingTop:40}}>

                    
                    <List 
                        dataArray={careCellRoutes}                     
                        renderRow={data => {
                            return (
                                <ListItem  onPress={() => this.props.navigation.navigate(data)} >
                                    <Text>{data}</Text>
                                </ListItem>
                                )
                            }}
                    > 
                    </List> 
                    <List>
                        <ListItem button onPress={()=>this._signOutAsync()} >
                            <Text>LogOut</Text>
                        </ListItem>
                    </List>         
                </Content>
            </Container>
        )
    }
}
