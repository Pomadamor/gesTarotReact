import React, { Component } from "react";
import { BackHandler } from 'react-native'
import { Button, Content, Form, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux'
import AsyncStorage from "@react-native-community/async-storage";


class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usermail: "",
      userpassword: "",
      error: ""
    }
  }

  async login() {
    const phone = this.state.phone
    const email = this.state.email;
    const password = this.state.password;

    fetch('http://51.15.203.158/api/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": email,
        "phone": phone,
        "password": password
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        const id = { type: "MUTATION_ID", value: responseJson.id }
        const email = { type: "MUTATION_EMAIL", value: responseJson.email }
        const phone = { type: "MUTATION_PHONE", value: responseJson.phone }
        const api_token = { type: "MUTATION_TOKEN", value: responseJson.api_token }
        const actionVerif= { type: "MUTATION_VERIF", value: true}
        this.props.dispatch(actionVerif)
        this.props.dispatch(id)
        this.props.dispatch(email)
        this.props.dispatch(phone)
        this.props.dispatch(api_token)
        console.log(responseJson.api_token)

        const token = responseJson.api_token;
        console.log(token)

        AsyncStorage.setItem("token", token)
        this.props.navigation.navigate("Loader");

        // await AsyncStorage.setItem("token", token);
        // this.props.navigation.navigate("Loader");
        return responseJson;

      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    const { error } = this.state;
    return <Content style={{ margin: 20 }}>
      <Label>{error}</Label>
      <Form style={{
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        color: "white",
        padding: 20
      }}>
        <Item floatingLabel>
          <Label style={{
            color: "white",
            fontSize: 17,
            fontWeight: 'bold'
          }}>Email</Label>
          <Input onChangeText={(email) => this.setState({ email })}
            value={this.state.email} />
        </Item>
        <Item floatingLabel>
          <Label style={{
            color: "white",
            fontSize: 17,
            fontWeight: 'bold'
          }}>Phone</Label>
          <Input onChangeText={(phone) => this.setState({ phone })}
            value={this.state.phone} />
        </Item>
        <Item floatingLabel last>
          <Label style={{
            color: "white",
            fontSize: 17,
            fontWeight: 'bold'
          }}>Password</Label>
          <Input secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password} />
        </Item>
        <Button block info style={{ marginTop: 100 }} onPress={() => this.login()}>
          <Label style={{
            color: "white",
            fontSize: 17
          }}>VALIDER</Label>
        </Button>
      </Form>
      {/* <Label style={{
                fontSize: 20,
                textAlign: "center",
                marginTop:20, 
                color: 'black'
                }}>Mot de passe oublié ?</Label> */}
    </Content>
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Choose"); // works best when the goBack is async
    return true;
  }
}

const mapStateToProps = state => {
  return {
    verif: state.toogleUser.verif,
  }
}

export default connect(mapStateToProps)(LoginScreen)