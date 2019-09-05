import React, { Component } from "react";
import { Button, Content, Form, Item, Input, Label } from 'native-base';
import { BackHandler } from 'react-native'
import { checkMail, Verifier_Numero_Telephone } from "../../service/VerifInput"
import { connect } from 'react-redux'

class RegisterScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      phone: "",
      email: "",
      password: "",
      error: ""
    }
  }

  /**
 * Cette fonction asynchrone permet d'enregistrer un nouvelle utilisateur puis envoi vers login
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
    if (
      username == "" ||
      phone == "" ||
      email == "" ||
      password == "") {
      alert('Veuillez remplir tout les champs.');
    }
    if (Verifier_Numero_Telephone(phone) == false) {
      alert('Le numero de téléphone est incorrect!');
    }
    if (checkMail(email) == false) {
      alert("L'adresse email saisit est incorrect!");
    }
    else {
      try {
        const res = await fetch('https://gestarot-api.lerna.eu/api/user', {
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

          const actionPhone = { type: "MUTATION_PHONE", value: phone }
          const actionEmail = { type: "MUTATION_EMAIL", value: email }
          const actionLogin = { type: "MUTATION_PSEUDO", value: username }

          this.props.dispatch(actionLogin)
          this.props.dispatch(actionEmail)
          this.props.dispatch(actionPhone)

          this.props.navigation.navigate("Login")

        } else {
          console.log("RESPONSE FALSE", res)
          alert("Le numéro de téléphone ou l'email existe déjà.");
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  /**
 * Affiche le visuelle de l'enregistrement
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
            fontSize: 17
          }}>Email</Label>
          <Input onChangeText={(email) => this.setState({ email })}
            style={{ color: "white" }}
            value={this.state.email} />
        </Item>
        <Item floatingLabel>
          <Label style={{
            color: "white",
            fontSize: 17
          }}>Téléphone</Label>
          <Input onChangeText={(phone) => this.setState({ phone })}
            style={{ color: "white" }}
            value={this.state.phone} />
        </Item>
        <Item floatingLabel>
          <Label style={{
            color: "white",
            fontSize: 17
          }}>Pseudo</Label>
          <Input onChangeText={(username) => this.setState({ username })}
            style={{ color: "white" }}
            value={this.state.username} />
        </Item>
        <Item floatingLabel>
          <Label style={{
            color: "white",
            fontSize: 17
            }}>Mot de passe</Label>
          <Input secureTextEntry={true}
            style={{ color: "white" }}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password} />
        </Item>
        <Item floatingLabel>
          <Label style={{
            color: "white",
            fontSize: 17
            }}>Confirmer le mot de passe</Label>
          <Input secureTextEntry={true}
            style={{ color: "white" }}
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