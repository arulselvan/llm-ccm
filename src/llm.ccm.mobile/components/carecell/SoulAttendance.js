import React from 'react';
import {
    Button,
    Container, Item, Input, Icon,
    Content, DatePicker, Label, CheckBox, Left, Right, Spinner
} from "native-base";

import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { AppHeader } from '../common/AppHeader';
import API from '../../api/API';

export class SoulAttendance extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chosenDate: new Date(),
            attendees: [{ name: '', isNew: false }, { name: '', isNew: false }],
            inputs: {},
            loading: false
        };

        this.refComponents = {};

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
        if (this.state.attendees.length - 1 <= id)
            this.addTextInput();
    }

    handleAttendeeNameChange = (idx) => (evt) => {
        const newAttendee = this.state.attendees.map((attendee, aidx) => {
            if (idx !== aidx) return attendee;
            return { ...attendee, name: evt };
        });

        this.setState({ attendees: newAttendee });
    }

    handleAttendeeIsNewCheckboxChange = (idx) => (evt) => {

        const newAttendee = this.state.attendees.map((attendee, aidx) => {
            if (idx != aidx) return attendee;
            return { ...attendee, isNew: !attendee.isNew }
        });

        this.setState({ attendees: newAttendee });
    }

    addTextInput = () => {
        this.setState({
            attendees: this.state.attendees.concat([{ name: '', isNew: false }])
        })

    }

    save = async () => {
alert('save called!');
        this.setState({ loading: true });

        let atendees = this.state.attendees.map(att => {
            return { name: att.name, isNew: att.isNew, date: this.state.chosenDate, CareCellId: 1 }
        })


        try {
            let result = await API.post('care-cell/souls-attendance', atendees);

            /*Toast.show({
                text: "Saved Succssfully!",
                buttonText: "Okay",
                type: "success"
              });*/
            this.setState({ loading: false });

            alert("saved successfully!");
        }
        catch (ex) {
            console.log(ex);
        }
    }

    render() {

        var attendeesItems = this.state.attendees.map((attendee, idx) => {
            return (

                <Item style={{ flexDirection: "row" }} key={idx} >

                    <Input placeholder='Enter Name'
                        onSubmitEditing={() => {
                            this.focusNextField(idx + 1);
                        }}
                        returnKeyType={"next"}
                        blurOnSubmit={false}
                        ref={component => this.refComponents[idx] = component}
                        onChangeText={this.handleAttendeeNameChange(idx)}
                        value={attendee.name} style={{ maxWidth: '80%' }}
                    />

                    <CheckBox checked={attendee.isNew} color="green" onPress={this.handleAttendeeIsNewCheckboxChange(idx)} />

                </Item>


            )
        });

        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Container>
                    <AppHeader navigation={this.props.navigation} title={'Souls Attendance'}  action={this.save}/>
                    <Content style={{ marginLeft: 15, marginRight: 15, flex: 1 }}>
                        <Item inlineLabel>
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
                                onDateChange={this.setDate} />
                        </Item>


                        <Item style={{ marginTop: 20 }}>
                            <Left>
                                <Label>Attendies</Label>
                            </Left>
                            <Right>
                                <Label>Is New?</Label>
                            </Right>
                        </Item>

                        {this.state.loading ? <Spinner /> : attendeesItems}


                    </Content>
                </Container >
            </KeyboardAvoidingView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4c69a5',
        flex: 1,
    },
})
