import React, { Component } from "react";
import { BackHandler } from 'react-native'
import { Button, Content, Form, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux'
import { checkMail, Verifier_Numero_Telephone } from "../../../service/VerifInput"


class AddFriendScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        identifiant: "",
        email: '',
        phone: '',
        pseudo: "",
        error: ""
        }
    }

 /**
* Cette fonction est l'action du bouton login qui permet de se connecter a l'api login, dispatcher le user avec le token puis retourner vers loader
*/

  async add() {
    console.log("test add friend 0")

    const data = {
        identifiant: this.state.identifiant,
        pseudo: this.state.pseudo,
        email: this.state.email,
        phone: this.state.phone,
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
    else if (Verifier_Numero_Telephone(data.identifiant) == true){
        data.phone = data.identifiant
      console.log("JUSQU'ICI CA FONCTIONNE", data)
      fetch('https://gestarot-api.lerna.eu/api/logged_user/friends', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-token': data.token
        },
        body: JSON.stringify({
          "email": data.email,
          "phone": data.phone,
          "username": data.pseudo
        }),
      }).then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.status == 'error'){
            console.log ("YOUPIE")
            alert('Les informations sont incorrectes.');
          }
          else{
            console.log("TRRRUUUEEE", responseJson)
            this.props.navigation.navigate("Friends");
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
          'api-token': data.token
        },
        body: JSON.stringify({
          "email": data.email,
          "phone": data.phone,
          "username": data.pseudo
        }),
      }).then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.status == 'error'){
            console.log ("YOUPIE")
            alert('Les informations sont incorrectes.');
          }
          else{
            console.log("TRRRUUUEEE", responseJson)
            this.props.navigation.navigate("Friends");
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
          }}>Email ou téléphone</Label>
          <Input onChangeText={(identifiant) => this.setState({ identifiant })}
            style={{color: "white"}}
            value={this.state.identifiant} />
        </Item>

        <Item floatingLabel>
          <Label style={{
            color: "white",
            fontSize: 17,
          }}>Pseudo</Label>
          <Input
            style={{color: "white"}}
            onChangeText={(pseudo) => this.setState({ pseudo })}
            value={this.state.pseudo} />
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