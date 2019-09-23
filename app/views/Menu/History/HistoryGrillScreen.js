import React, { Component } from "react";
import { View, Text, Button } from "native-base";
import { Image, Alert } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

/**
 * Component permet d'afficher la premiere ligne du tableau game
 */


class HistoryGrill extends Component {

    alertChoose(nb){
      var plop = historyGrill[0]
      var token1 = ""
      AsyncStorage.getItem("token").then(token => {
        if (token) {
            initialState.token = token
            console.log(token, "la")
            token1 = token
            //if token then authenticated so go to home
        } else {
            console.log(AsyncStorage.getItem("token"), "la")
            console.log("la", token)
        }
    })

        Alert.alert(
            'Historique',
            "Selectionner une action.",
            [
            {
                text: 'Annuler',
                onPress: () => console.log('Annulation de la suppression')
            },
            {
                text: 'Supprimer',
                onPress: () => 
                fetch('https://gestarot-api.lerna.eu/api/game/'+plop.game_id, {
                    method: 'DELETE',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'api-token': token1
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
                fetch('https://gestarot-api.lerna.eu/api/game/'+plop.game_id, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'api-token': token1
            },
            }).then((response) => response.json())
              .then((responseJson) => {
                  if(responseJson.status == 'error'){
                      console.log ("ERROR", responseJson.status)
                      alert('Vérifier votre connexion internet, avant de cliquer sur OK');
                  }
                  else{
                      console.log("detail response party unique", responseJson)

                      const actionWatchParty = { type: "MUTATION_WATCH_PARTY", value: responseJson["games"]}
                      this.props.dispatch(actionWatchParty)
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

    var plop = historyGrill[0]
    console.log("test historyGrill", historyGrill)
    console.log("test historyGrill 1", historyGrill[0])
    console.log("test historyGrill 2", historyGrill.joueur1)
    console.log("test historyGrill 3", plop.joueur1)


    if (plop.nb_joueur > 3) {
      joueurFour = <Button bordered light
      onPress={() => this.alertChoose(nb = plop.game_id)}
        style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }}
      >
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image source={plop.joueur4.image} />
          <Text style={{
            textAlign: 'center',
            textTransform: 'lowercase',
            color: "white"
          }}
          >
            {plop.joueur4.username}
          </Text>
        </View>
      </Button>
    } else {
      joueurFour = <View></View>
    }

    if (plop.nb_joueur > 4) {
      joueurFive = <Button bordered light
      onPress={() => this.alertChoose(nb = plop.game_id)}
        style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }}
      >
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image source={plop.joueur5.image} />
          <Text style={{
            textAlign: 'center',
            textTransform: 'lowercase',
            color: "white"
          }}
          >
            {plop.joueur5.username}
          </Text>
        </View>
      </Button>
    } else {
      joueurFive = <View></View>
    }

    return (
      <View style={{ flexDirection: 'row' }}>
        <Button bordered light
            onPress={() => this.alertChoose(nb = plop.game_id)}
          style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }}
        >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Text style={{ color: "white" }}>Nom</Text>
            <Text style={{ color: "white" }}>Date</Text>
          </View>
        </Button>
        <Button bordered light
            onPress={() => this.alertChoose(nb = plop.game_id)}
          style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }}
        >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image source={plop.joueur1.image} />
            <Text style={{
              textAlign: 'center',
              textTransform: 'lowercase',
              color: "white"
            }}>{plop.joueur1.username}
            </Text>
          </View>
        </Button>
        <Button bordered light
            onPress={() => this.alertChoose(nb = plop.game_id)}
            style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image source={plop.joueur2.image} />
            <Text style={{
              textAlign: 'center',
              textTransform: 'lowercase',
              color: "white"
            }}>{plop.joueur2.username}</Text>
          </View>
        </Button>
        <Button bordered light
             onPress={() => this.alertChoose(nb = plop.game_id)}
          style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image source={plop.joueur3.image} />
            <Text style={{
              textAlign: 'center',
              textTransform: 'lowercase',
              color: "white"
            }}>{plop.joueur3.username}</Text>
          </View>
        </Button>
        {joueurFour}
        {joueurFive}
      </View>
    )
  }
}

export default HistoryGrill;