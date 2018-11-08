import React from 'react';
import {
    Button,
    Text,
    Container, Item, Input, Icon,
    List,
    ListItem,
    Content,
    Image, H1, DatePicker, Form, Label
} from "native-base";

import { TextInput } from 'react-native';
import { AppHeader } from '../common/AppHeader';

export class SoulAttendance extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chosenDate: new Date(),
            attendees: [{ name: '' }, { name: '' }],
            inputs: {}
        };

        this.refComponents ={};

        this.setDate = this.setDate.bind(this);
        this.focusNextField = this.focusNextField.bind(this);
        this.setInputField = this.setInputField.bind(this);
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    setInputField(idx, input) {

        console.log("inside setInputField");
        console.log(idx);
        console.log(input);

        /*let inputObj = this.state.inputs;
        inputObj[idx] = input
        this.setState({
            inputs:inputObj
        })*/

    }

    focusNextField(id) {
        console.log('inside focusNext Field');
        console.log(id);
        if (this.state.attendees.length - 1 <= id)
            this.addTextInput();


        /*if(this.refs['textinput'+id]){
            this.refs['textinput'+id].focus();
        }*/

        //this.inputs[id].focus();
    }

    handleAttendeeNameChange = (idx) => (evt) => {

        console.log('inside handleAttendeeNameChange');
        console.log(idx);
        console.log(evt);
        const newAttendee = this.state.attendees.map((attendee, aidx) => {
            if (idx !== aidx) return attendee;
            return { ...attendee, name: evt };
        });

        this.setState({ attendees: newAttendee });

        
    }

    addTextInput = () => {
        this.setState({
            attendees: this.state.attendees.concat([{ name: '' }])
        })

       
    }

    render() {
        return (
            <Container>
                <AppHeader navigation={this.props.navigation} title={'Souls Attendance'} />
                <Content style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Label>Date:</Label>
                    <DatePicker
                        defaultDate={new Date()}
                        minimumDate={new Date(2018, 1, 1)}
                        maximumDate={new Date(2018, 12, 31)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={this.setDate}
                    />
                    <Label>Attendees :</Label>

                    {this.state.attendees.map((attendee, idx) => {
                       
                        return (
                        <Item success key={idx}>
                            <Input placeholder='Enter Name'
                                onSubmitEditing={() => {
                                    this.focusNextField(idx + 1);
                                }}
                                returnKeyType={"next"}
                                blurOnSubmit={false}                               
                                ref={component=> this.refComponents[idx] = component}
                                onChangeText={this.handleAttendeeNameChange(idx)}
                                value={attendee.name} />

                            <Icon name='checkmark-circle' />
                        </Item>
                    )})}

                </Content>
            </Container>
        )
    }
}
