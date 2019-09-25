import React, { Component } from "react";
import { View, Text, Button } from "native-base";
import { Image, Alert } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

/**
 * Component permet d'afficher la premiere ligne du tableau game
 */


class HistoryGrill extends Component {
      constructor (props) {
        super(props)
        this.state = {
          token1: ""
      }
    }

    componentDidMount(){
      
      AsyncStorage.getItem("token").then(token => {
        if (token) {
            // console.log(token, "la")
            this.state.token1 = token
            //if token then authenticated so go to home
        } else {
            // console.log(AsyncStorage.getItem("token"), "la")
            // console.log("la", token)
        }
      })
    }
    alertChoose(nb){
      // console.log("plop", this.state.token1)
        var historyGrill = this.props.historyGrill


        Alert.alert(
            'Historique',
            "Selectionner une action.",
            [
            {
                text: 'Annuler',
                onPress: () => console.log('Annulation de la suppression')
            },
            {
                text: 'Afficher',
                onPress: () => 
                fetch('https://gestarot-api.lerna.eu/api/game/'+historyGrill.game_id, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'api-token': this.state.token1
            },
            }).then((response) => response.json())
              .then((responseJson) => {
                  if(responseJson.status == 'error'){
                      // console.log ("ERROR", responseJson.status)
                      alert('Vérifier votre connexion internet, avant de cliquer sur OK');
                  }
                  else{
                      // console.log("detail response party unique", responseJson)
                      this.props.onPress(responseJson)
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

     historyGrill = this.props.historyGrill
    //  // console.log("test historyGrill", historyGrill)
    // // console.log("test historyGrill 2", historyGrill.Joueur1)
    // // console.log("test historyGrill 3", historyGrill.nb_joueurs)


    if (historyGrill.nb_joueurs > 3) {
      joueurFour = <Button bordered light
      onPress={() => this.alertChoose(nb = historyGrill.game_id)}
        style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }}
      >
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image source={historyGrill.Joueur4.image} />
          <Text style={{
            textAlign: 'center',
            textTransform: 'lowercase',
            color: "white"
          }}
          >
            {historyGrill.Joueur4.username}
          </Text>
        </View>
      </Button>
    } else {
      joueurFour = <View></View>
    }

    if (historyGrill.nb_joueurs> 4) {
      joueurFive = <Button bordered light
      onPress={() => this.alertChoose(nb = historyGrill.game_id)}
        style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }}
      >
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image source={historyGrill.Joueur5.image} />
          <Text style={{
            textAlign: 'center',
            textTransform: 'lowercase',
            color: "white"
          }}
          >
            {historyGrill.Joueur5.username}
          </Text>
        </View>
      </Button>
    } else {
      joueurFive = <View></View>
    }

    return (
      <View style={{ flexDirection: 'row' }}>
        <Button bordered light
            onPress={() => this.alertChoose(nb = historyGrill.game_id)}
          style={{  height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }}
        >
          <View style={{ width: 50, alignItems: "center" }}>
            <Text style={{ color: "white" }}>Admin</Text>
            <Text style={{ color: "white" }}>{historyGrill.Joueur1.username}</Text>
          </View>
        </Button>
        <Button bordered light
            onPress={() => this.alertChoose(nb = historyGrill.game_id)}
          style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }}
        >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image source={historyGrill.Joueur1.image} />
            <Text style={{
              textAlign: 'center',
              textTransform: 'lowercase',
              color: "white"
            }}>{historyGrill.Joueur1.username}
            </Text>
          </View>
        </Button>
        <Button bordered light
            onPress={() => this.alertChoose(nb = historyGrill.game_id)}
            style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image source={historyGrill.Joueur2.image} />
            <Text style={{
              textAlign: 'center',
              textTransform: 'lowercase',
              color: "white"
            }}>{historyGrill.Joueur2.username}</Text>
          </View>
        </Button>
        <Button bordered light
             onPress={() => this.alertChoose(nb = historyGrill.game_id)}
          style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image source={historyGrill.Joueur3.image} />
            <Text style={{
              textAlign: 'center',
              textTransform: 'lowercase',
              color: "white"
            }}>{historyGrill.Joueur3.username}</Text>
          </View>
        </Button>
        {joueurFour}
        {joueurFive}
      </View>
    )
  }
}

export default HistoryGrill;