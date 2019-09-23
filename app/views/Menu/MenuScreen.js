import React, { Component } from 'react';
import { View, Linking, Image } from 'react-native'
import { Button, Text, Icon } from 'native-base';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";


/**
 * Component permet de gérer l'affichage de la vue du menu.
 */


class MenuScreen extends Component {

  /**
* Les trois fonctions suivante permette de gérer le retour du clavier
*/

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    const token = this.props.token

    fetch('https://gestarot-api.lerna.eu/api/history/party', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'api-token': token
            },
            }).then((response) => response.json())
              .then((responseJson) => {
                  if(responseJson.status == 'error'){
                      console.log ("ERROR", responseJson.status)
                      alert('Vérifier votre connexion internet, avant de cliquer sur OK');
                  }
                  else{
                      console.log("detail response detail party", responseJson)

                      if(responseJson["games"].length > 0){
                        console.log("detail response detail party 1", responseJson)

                        const actionParty = { type: "MUTATION_PARTY", value: responseJson["games"]}
                        this.props.dispatch(actionParty)
                      }
                      return responseJson;
                  }
              })


  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Home"); // works best when the goBack is async
    return true;
  }

  /**
* Fonction qui permet au clic de l'utilisateur sur disconnect, de se deconnecter et d'effacer les données stocker
* @param {string} token 
* @param {string} pseudo 
* @param {string} color 
* @param {string} image 
* @param {string} avatar 
*/

  disconnect() {
    removeFew = async () => {
      const keys = ['token', 'pseudo', 'color', 'image', 'avatar']
      try {
        await AsyncStorage.multiRemove(keys)
      } catch(e) {
        console.log('echecs suppressions storage')

      }
    
      console.log('Done')
     }
    // const actionFriends = { type: "MUTATION_FRIENDS_DELETE", value: [] }
    // this.props.dispatch(actionFriends)

    const actionPseudo = { type: "MUTATION_PSEUDO", value: "Joueur" }
    this.props.dispatch(actionPseudo)   

    const actionVerif = { type: "MUTATION_VERIF", value: false }
    this.props.dispatch(actionVerif)
    AsyncStorage.removeItem("token")
    this.props.navigation.navigate("Choose")
  }

  /**
* ce rendu permet de gérer l'affichage du menu
* Les zones commentés correspondent à des améliorations en cour
*/

  render() {

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button bordered light 
            onPress={() => this.props.navigation.navigate("Friends")}
            style={{ flex: 1, alignContent: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
            <View style={{ width: "100%", alignItems: "center" }}>
               <Image
                    style={{
                      tintColor: "#FFFFFF",
                      resizeMode: 'center',
                      height: 17
                    }}
                    source={require('../../assets/img/joueurs_five.png')}
                  />
              <Text>Amis</Text>
            </View>
          </Button>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button bordered light
            onPress={() => this.props.navigation.navigate("History")}
            style={{ flex: 1, resizeMode: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
            <View style={{ width: "100%", alignItems: "center" }}>
            <Image
                    style={{
                      tintColor: "#FFFFFF",
                      resizeMode: 'center',
                      height: 24
                    }}
                    source={require('../../assets/img/history.png')}
                  />
              <Text>Historique des parties</Text>
            </View>
          </Button>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button bordered light
            onPress={() => { Linking.openURL('http://www.letarot.net/fr/rules.html') }}
            style={{ flex: 1, resizeMode: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
            <View style={{ width: "100%", alignItems: "center" }}>
              <Icon active name="star" />
              <Text>Règle du jeu</Text>
            </View>
          </Button>
          <Button bordered light
            onPress={() => { Linking.openURL('https://google.com') }}
            style={{ flex: 1, alignContent: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
            <View style={{ width: "100%", alignItems: "center" }}>
            <Image
                    style={{
                      tintColor: "#FFFFFF",
                      resizeMode: 'center',
                      height: 24
                    }}
                    source={require('../../assets/img/files.png')}
                  />
              <Text>Mention légales</Text>
            </View>
          </Button>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button bordered light
            onPress={() => this.disconnect()}
            style={{ flex: 1, alignContent: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
            <View style={{ width: "100%", alignItems: "center" }}>
            <Image
                    style={{
                      tintColor: "#FFFFFF",
                      resizeMode: 'center',
                      height: 24
                    }}
                    source={require('../../assets/img/exit.png')}
                  />
              <Text>Deconnexion</Text>
            </View>
          </Button>
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    verif: state.toogleUser.verif,
    pseudo: state.toogleUser.pseudo,
    friends: state.toogleFriends.friends,
    party: state.toogleParty.party,
    token: state.toogleUser.token
  }
}

export default connect(mapStateToProps)(MenuScreen)
