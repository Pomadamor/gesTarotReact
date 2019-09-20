import React, { Component } from "react";
import { View, Text, Button } from "native-base";
import { Image, Alert } from 'react-native';

/**
 * Component permet d'afficher la premiere ligne du tableau game
 */

class HistoryGrill extends Component {

    alertChoose(nb){
        Alert.alert(
            'Attention',
            "Êtes-vous sur de vouloir supprimer cette ami ?",
            [
            {
                text: 'Annuler',
                onPress: () => console.log('Annulation de la suppression')
            },
            {
                text: 'Supprimer',
                onPress: () => 
                fetch('https://gestarot-api.lerna.eu/api/history/party/'+historyGrill.id, {
                    method: 'DELETE',
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
                              console.log("Party supprimer", responseJson)
                              this.props.navigation.navigate("Home")
                              return responseJson;
                          }
                      })
                },
            {
                text: 'Afficher',
                onPress: () => 
                fetch('https://gestarot-api.lerna.eu/api/logged_user/history/party/'+historyGrill.id, {
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
                      console.log("detail response party unique", responseJson)

                      if(responseJson["party"].length > 0){
                        const actionWatchParty = { type: "MUTATION_WATCH_PARTY", value: responseJson["party"]}
                        this.props.dispatch(actionWatchParty)
                      }
                      this.props.navigation.navigate("Game")
                      return responseJson;
                  }
              })
            }
            ],
            { cancelable: true },
        )
    }

   /**
   * ce rendu afficher la ligne de details des joueur
    * @param {string} avatar 
    * @param {string} avatar2 
    * @param {string} avatar3 
    * @param {string} avatar4
    * @param {string} avatar5
    * @param {Int} nbJoueur
    * @param {string} pseudo
    * @param {string} pseudo2
    * @param {string} pseudo3
    * @param {string} pseudo4
    * @param {string} pseudo5
    */
  render() {

    if (historyGrill.nbJoueur > 3) {
      joueurFour = <Button bordered light
      onPress={() => this.alertChoose(nb = historyGrill.id)}
        style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }}
      >
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image source={historyGrill.avatar4} />
          <Text style={{
            textAlign: 'center',
            textTransform: 'lowercase',
            color: "white"
          }}
          >
            {historyGrill.pseudo4.username}
          </Text>
        </View>
      </Button>
    } else {
      joueurFour = <View></View>
    }

    if (historyGrill.nbJoueur > 4) {
      joueurFive = <Button bordered light
      onPress={() => this.alertChoose(nb = historyGrill.id)}
        style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }}
      >
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image source={historyGrill.avatar5} />
          <Text style={{
            textAlign: 'center',
            textTransform: 'lowercase',
            color: "white"
          }}
          >
            {historyGrill.pseudo5.username}
          </Text>
        </View>
      </Button>
    } else {
      joueurFive = <View></View>
    }

    return (
      <View style={{ flexDirection: 'row' }}>
        <Button bordered light
            onPress={() => this.alertChoose(nb = historyGrill.id)}
          style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }}
        >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Text style={{ color: "white" }}>Nom</Text>
            <Text style={{ color: "white" }}>Date</Text>
          </View>
        </Button>
        <Button bordered light
            onPress={() => this.alertChoose(nb = historyGrill.id)}
          style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }}
        >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image source={historyGrill.avatar} />
            <Text style={{
              textAlign: 'center',
              textTransform: 'lowercase',
              color: "white"
            }}>{historyGrill.pseudo}
            </Text>
          </View>
        </Button>
        <Button bordered light
            onPress={() => this.alertChoose(nb = historyGrill.id)}
            style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image source={historyGrill.avatar2} />
            <Text style={{
              textAlign: 'center',
              textTransform: 'lowercase',
              color: "white"
            }}>{historyGrill.pseudo2.username}</Text>
          </View>
        </Button>
        <Button bordered light
             onPress={() => this.alertChoose(nb = historyGrill.id)}
          style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image source={historyGrill.avatar3} />
            <Text style={{
              textAlign: 'center',
              textTransform: 'lowercase',
              color: "white"
            }}>{historyGrill.pseudo3.username}</Text>
          </View>
        </Button>
        {joueurFour}
        {joueurFive}
      </View>
    )
  }
}

export default HistoryGrill;