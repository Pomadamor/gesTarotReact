import React, { Component } from "react";
import { BackHandler } from 'react-native'
import { Button, Content, Form, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux'
import AsyncStorage from "@react-native-community/async-storage";
import { checkMail, Verifier_Numero_Telephone } from "../../service/VerifInput"


/**
 * Component permet de gérer l'affichage de la vue d'authentification quand on possède déjà un compte.
 */

class LoginScreen extends Component {

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
* @param {string} email
* @param {string} phone
* @param {string} token
*/

  async login() {

    const data = {
      identifiant: this.state.identifiant,
      password: this.state.password,
      email: '',
      phone: ''
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
      fetch('https://gestarot-api.lerna.eu/api/user/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "email": data.email,
          "phone": data.phone,
          "password": data.password
        }),
      }).then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.status == 'error'){
            console.log ("YOUPIE")
            alert('Votre identifiant ou votre mot de passe est incorrect.');
          }
          else{
            console.log("TRRRUUUEEE", responseJson)
            const id = { type: "MUTATION_ID", value: responseJson.id }
            // const pseudo = { type: "MUTATION_PSEUDO", value: responseJson.username }
            const email = { type: "MUTATION_EMAIL", value: responseJson.email }
            const phone = { type: "MUTATION_PHONE", value: responseJson.phone }
            const api_token = { type: "MUTATION_TOKEN", value: responseJson.api_token }
            const actionVerif = { type: "MUTATION_VERIF", value: true }
            this.props.dispatch(actionVerif)
            this.props.dispatch(id)
            this.props.dispatch(email)
            // this.props.dispatch(pseudo)
            this.props.dispatch(phone)
            this.props.dispatch(api_token)
            console.log(responseJson.api_token)
  
            const token = responseJson.api_token;
            console.log(token)
  
            AsyncStorage.setItem("token", token)
            this.props.navigation.navigate("Loader");
            return responseJson;
          }
        })
    }
    else if (checkMail(data.identifiant) == true) {
      data.email = data.identifiant
      
      console.log("JUSQU'ICI CA FONCTIONNE", data)
      fetch('https://gestarot-api.lerna.eu/api/user/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "email": data.email,
          "phone": data.phone,
          "password": data.password
        }),
      }).then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.status == 'error'){
            console.log ("YOUPIE")
            alert('Votre identifiant ou votre mot de passe est incorrect.');
          }
          else{
            const token = responseJson.api_token
            const STORAGE_ID = responseJson.id
            // STORAGE_PSEUDO = responseJson.pseudo
            const STORAGE_EMAIL = responseJson.email
            const STORAGE_PHONE = responseJson.phone

            AsyncStorage.setItem("token", token)
            AsyncStorage.setItem("STORAGE_ID", STORAGE_ID )
            // AsyncStorage.setItem("STORAGE_PSEUDO", STORAGE_PSEUDO )
            AsyncStorage.setItem("STORAGE_EMAIL", STORAGE_EMAIL )
            AsyncStorage.setItem("STORAGE_PHONE", STORAGE_PHONE )
            
            console.log("TRRRUUUEEE", responseJson)
            const id = { type: "MUTATION_ID", value: responseJson.id }
            const email = { type: "MUTATION_EMAIL", value: responseJson.email }
            const phone = { type: "MUTATION_PHONE", value: responseJson.phone }
            const api_token = { type: "MUTATION_TOKEN", value: responseJson.api_token }
            const actionVerif = { type: "MUTATION_VERIF", value: true }
            this.props.dispatch(actionVerif)
            this.props.dispatch(id)
            this.props.dispatch(email)
            this.props.dispatch(phone)
            this.props.dispatch(api_token)


            this.props.navigation.navigate("Loader");
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

  componentWillMount(){
    if(this.props.phone != ""){
      this.state.phone = this.props.phone
    }
  }

   /**
    * rendu qui permet de présenter un formulaire d'authentification
  * @param {string} email
  * @param {string} phone
  * @param {string} token
  */

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
          }}>Mot de passe</Label>
          <Input secureTextEntry={true}
            style={{color: "white"}}
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
    this.props.navigation.navigate("Choose"); 
    return true;
  }
}

const mapStateToProps = state => {
  return {
    verif: state.toogleUser.verif,
    id: state.toogleUser.id,
    email: state.toogleUser.email,
    phone: state.toogleUser.phone,
    token: state.toogleUser.token,
  }
}

export default connect(mapStateToProps)(LoginScreen)