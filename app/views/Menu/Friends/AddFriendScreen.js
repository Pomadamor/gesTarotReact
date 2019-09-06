import React, { Component } from "react";
import { BackHandler } from 'react-native'
import { Button, Content, Form, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux'
import AsyncStorage from "@react-native-community/async-storage";
import { checkMail, Verifier_Numero_Telephone } from "../../../service/VerifInput"


class AddFriendScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // identifiant: "",
      email: '',
      phone: 'Email ou téléphone',
      password: "",
      error: ""
    }
  }

 /**
* Cette fonction est l'action du bouton login qui permet de se connecter a l'api login, dispatcher le user avec le token puis retourner vers loader
*/

  async add() {

    const data = {
        identifiant: this.state.identifiant,
        pseudo: this.state.pseudo,
        email: '',
        phone: '',
        token: this.props.token
    }
    if (Verifier_Numero_Telephone(data.identifiant) == true) {
      data.phone = this.state.identifiant
    }
    else if (checkMail(data.identifiant) == true) {
      data.email = this.state.identifiant
    }

    if (data.identifiant == "" || data.password == "") {
      alert('Veuillez remplir tout les champs.');
    }
    else if (Verifier_Numero_Telephone(data.identifiant) == true || this.props.phone != ""){
      data.phone = this.props.phone
      if (data.phone == "" ){
        data.phone = data.identifiant
      }
      console.log("JUSQU'ICI CA FONCTIONNE", data)
      fetch('https://gestarot-api.lerna.eu/api/logged_user/friends', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-token': token
        },
        body: JSON.stringify({
          "email": data.email,
          "phone": data.phone,
          "pseudo": data.pseudo
        }),
      }).then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.status == 'error'){
            console.log ("YOUPIE")
            alert('Les informations sont incorrectes.');
          }
          else{
            console.log("TRRRUUUEEE", responseJson)
            // const id = { type: "MUTATION_ID", value: responseJson.id }
            // // const pseudo = { type: "MUTATION_PSEUDO", value: responseJson.username }
            // const email = { type: "MUTATION_EMAIL", value: responseJson.email }
            // const phone = { type: "MUTATION_PHONE", value: responseJson.phone }
            // const api_token = { type: "MUTATION_TOKEN", value: responseJson.api_token }
            // const actionVerif = { type: "MUTATION_VERIF", value: true }
            // this.props.dispatch(actionVerif)
            // this.props.dispatch(id)
            // this.props.dispatch(email)
            // // this.props.dispatch(pseudo)
            // this.props.dispatch(phone)
            // this.props.dispatch(api_token)
            // console.log(responseJson.api_token)
  
            // const token = responseJson.api_token;
            // console.log(token)
  
            // AsyncStorage.setItem("token", token)
            // this.props.navigation.navigate("Loader");
            return responseJson;
          }
        })
    }
    else if (checkMail(data.identifiant) == true) {
      data.email = data.identifiant
      
      console.log("JUSQU'ICI CA FONCTIONNE", data)
      fetch('https://gestarot-api.lerna.eu/api/logged_user/friends', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-token': token
        },
        body: JSON.stringify({
          "email": data.email,
          "phone": data.phone,
          "pseudo": data.pseudo
        }),
      }).then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.status == 'error'){
            console.log ("YOUPIE")
            alert('Les informations sont incorrectes.');
          }
          else{
            console.log("TRRRUUUEEE", responseJson)
            // const id = { type: "MUTATION_ID", value: responseJson.id }
            // // const pseudo = { type: "MUTATION_PSEUDO", value: responseJson.username }
            // const email = { type: "MUTATION_EMAIL", value: responseJson.email }
            // const phone = { type: "MUTATION_PHONE", value: responseJson.phone }
            // const api_token = { type: "MUTATION_TOKEN", value: responseJson.api_token }
            // const actionVerif = { type: "MUTATION_VERIF", value: true }
            // this.props.dispatch(actionVerif)
            // this.props.dispatch(id)
            // this.props.dispatch(email)
            // // this.props.dispatch(pseudo)
            // this.props.dispatch(phone)
            // this.props.dispatch(api_token)
            // console.log(responseJson.api_token)
  
            // const token = responseJson.api_token;
            // console.log(token)
  
            // AsyncStorage.setItem("token", token)
            // this.props.navigation.navigate("Loader");
            return responseJson;
          }

        })
        .catch((error) => {
          console.error(error);
        });
      
    } else {
      alert('Les informations saisis sont incorrect.');
    }
  }

  /**
* Ce rendu affiche la vue login
* Les parties commenter sont en cour d'amélioration
*/
  componentWillMount(){
    if(this.props.phone != ""){
      this.state.phone = this.props.phone
    }
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
          }}>{this.state.phone}</Label>
          <Input onChangeText={(identifiant) => this.setState({ identifiant })}
            style={{color: "white"}}
            value={this.state.identifiant} />
        </Item>

        <Item floatingLabel>
          <Label style={{
            color: "white",
            fontSize: 17,
          }}>Pseudos</Label>
          <Input
            style={{color: "white"}}
            onChangeText={(password) => this.setState({ pseudo })}
            value={this.state.password} />
        </Item>
        <Button block info style={{ marginTop: 100 }} onPress={() => this.add()}>
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

  /**
* Les trois fonctions suivante permette de gérer le retour du clavier
*/

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Friends"); // works best when the goBack is async
    return true;
  }
}

const mapStateToProps = state => {
  return {
    token: state.toogleUser.token,
  }
}

export default connect(mapStateToProps)(AddFriendScreen)