import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Container, Content, Text, Button, Icon, Form, View, Item, Input } from 'native-base';
export  class LeaderAttendance extends Component {
  render() {
    return (
      <Container style={styles.mainCon}>
        {/* <Loading isVisible={this.state.loading} /> */}
        <Content>
          <View style={{ height: 300, width: 300 }} />

          <Form style={{ flex: 1 }}>
            <View style={styles.form}>
              <Item style={styles.item}>
                <Icon
                  style={styles.iconFont}
                  type="MaterialIcons"
                  active
                  name="email"
                />
                <Input
                  // onChangeText={e => this.setTextValue("email", e)}
                  placeholderTextColor={"blue"}
                  style={styles.input}
                  placeholder="Email"
                />
              </Item>
              <Item style={styles.item}>
                <Icon
                  style={styles.iconFont}
                  type="MaterialIcons"
                  active
                  name="lock"
                />
                <Input
                  // onChangeText={e => this.setTextValue("password", e)}
                  secureTextEntry
                  placeholderTextColor={"blue"}
                  style={styles.input}
                  placeholder="Password"
                />
              </Item>
              <Item style={{ ...styles.item, marginBottom: 0 }}>
                <Icon
                  style={styles.iconFont}
                  type="MaterialIcons"
                  active
                  name="lock"
                />
                <Input
                  secureTextEntry
                  // onChangeText={e =>
                  //   this.setTextValue("password_confirmation", e)
                  // }
                  placeholderTextColor={"blue"}
                  style={styles.input}
                  placeholder="Confirm Password"
                />
              </Item>
            </View>
            {/* end form  */}
            <View style={{ height: 100 }}>
              <View style={{ width: "100%" }}>
                <Button
                  // onPress={() => this.signUp()}
                  style={styles.loginBtn}>
                  <Text
                    uppercase={false}
                    style={{ color: "white", fontSize: 12 }}
                  >
                    Create an account
                    </Text>
                </Button>
                <View
                  style={{
                    marginTop: 5,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={{ color: "white", fontSize: 11 }}>
                      By signing up, I agree to UOB's{" "}
                    </Text>
                    <Text
                      style={{
                        color: "red",
                        fontSize: 11,
                        textDecorationLine: "underline"
                      }}
                    >
                      Terms of Service
                      </Text>
                  </View>
                </View>
              </View>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    paddingTop: 30,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: "rgba(255, 255, 255, 0)"
  },
  form: {
    height: 170,
    paddingTop: 17,
    paddingLeft: 25,
    paddingRight: 25,
    borderColor: "transparent",
    backgroundColor: "transparent",
    borderRadius: 7,
    marginBottom: 20
  },
  loginBtn: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#00246a",
    width: "100%",
    borderRadius: 5
  },
  item: {
    backgroundColor: "transparent",
    borderColor: "blue",
    marginBottom: 5
  },
  verifyItem: {
    backgroundColor: "transparent"
  },
  iconFont: {
    color: "#143473",
    fontSize: 12
  },
  input: {
    fontSize: 12,
    color: "blue",
    height: 35
  },
  verifyItem: {
    borderRadius: 7,
    borderWidth: 0,
    borderColor: "transparent"
  },
  verifyInput: {
    fontSize: 12,
    color: "blue",
    backgroundColor: "transparent",
    borderRadius: 7,
    borderWidth: 0,
    borderColor: "transparent",
    paddingLeft: 20
  },
  linkBtn: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center"
  }
});