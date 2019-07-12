import React, { Component } from "react";
import { Button, Content, Form, Item, Input, Label } from 'native-base';
import { BackHandler } from 'react-native'
import {checkMail, Verifier_Numero_Telephone} from "../../service/VerifInput"
import { connect } from 'react-redux'

class RegisterScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      phone: "",
      email: "",
      password: "",
      password2: "",
      error: ""
    }
  }

    /**
   * Cette fonction asynchrone permet d'enregistrer un nouvelle utilisateur
   */


  async handleRegister() {
    const username = this.state.username;
    const phone = this.state.phone
    const email = this.state.email;
    const password = this.state.password;

    if (password != this.state.password2) {
      alert(
        'Veuillez saisir deux mots de passe identique.',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
    else if(
      username == "" || 
      phone == ""|| 
      email == ""|| 
      password == ""){
      alert('Veuillez remplir tout les champs.');
    }
    else if(Verifier_Numero_Telephone(phone) == false)
    {
      alert('Le numero de téléphone est incorrect!');
    }else if(checkMail == false){
      alert("L'adresse email saisit est incorrect!");
    }
    else {
      try {
        const res = await fetch('https://gestarot-api.lerna.eu/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "username": username,
            "email": email,
            "phone": phone,
            "password": password
          }),
        });
        if (res.ok) {
          console.log("RESPONSE TRUE", res)
          this.props.navigation.navigate("Login")
          const actionLogin= { type: "MUTATION_PSEUDO", value: true}
          this.props.dispatch(actionLogin)
        } else {
          console.log("RESPONSE FALSE", res)
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

    /**
   * Affiche le visuelle de l'enregistrement
   * @param nb défini le nombre de joueur choisi
   */

  render() {
    const { error } = this.state;
    return <Content style={{ marginLeft: 16, marginRight: 16 }}>
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
          }}>Pseudo</Label>
          <Input onChangeText={(username) => this.setState({ username })}
            value={this.state.username} />
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
        <Item floatingLabel last>
          <Label style={{
            color: "white",
            fontSize: 17,
            fontWeight: 'bold'
          }}>Confirm Password</Label>
          <Input secureTextEntry={true}
            onChangeText={(password2) => this.setState({ password2 })}
            value={this.state.password2} />
        </Item>
        <Button block info style={{ marginTop: 100 }} onPress={() => this.handleRegister()}>
          <Label style={{
            color: "white",
            fontSize: 17
          }}>Valider</Label>
        </Button>
      </Form>
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
    pseudo: state.toogleUser.pseudo,
  }
}

export default connect(mapStateToProps)(RegisterScreen)