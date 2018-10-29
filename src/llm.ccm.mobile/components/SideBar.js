import React from 'react';
import {
    Button,
    Text,
    Container,
    List,
    ListItem,
    Content,
    Icon
} from "native-base";

const careCellRoutes = ["Home", "Souls", "Leaders", "House Visit", "Prayer Request", "Church Service"];

export class SideBar extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container>
                <Content>
                    <Image></Image>
                    <List 
                        dataArray={careCellRoutes}
                        contentContainerStyle={{ mariginTop: 120 }}
                        renderRow={data => {
                            return (
                                <ListItem button onPress={() => this.props.navigation.navigate(data)} >
                                    <Text>{data}</Text>
                                    </ListItem>
                                )
                            }}
                    />           
                </Content>
            </Container>
        )
    }
}
