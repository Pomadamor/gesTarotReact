import React, { Component } from "react";
import { View, Text, Button } from "native-base";
import { Alert, Image } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

/**
 * Component permet de gérer l'affichage de la grille des amis.
 */

class FriendsSave extends Component {

  constructor(props) {
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
  render() {

    friendsSave = this.props.friendsSave

    // console.log("FRIENDS", friendsSave)
    // console.log("FRIENDS 1", friendsSave.username)
    // console.log("FRIENDS 3", this.props.friendsSave.username)

    typeFriends = <View style={{ width: "100%", alignItems: "center" }}>
    <Text style={{
      textAlign: 'center',
      color: "white"
    }}>En attente</Text>
  </View>

    if (friendsSave.color != undefined) {
      typeFriends = <View style={{ backgroundColor:friendsSave.color, width: "100%", alignItems: "center" }}>
        <Image style={{
          backgroundColor:FriendsSave.color,
          textAlign: 'center',
          color: "white"
        }}
        source={friendsSave.image} />
      </View>
    }  
    
    return (
      <View style={{ flexDirection: 'row' }}>
        <Button bordered light
          backgroundColor='rgba(52, 52, 52, 0.6)'
          style={{ flex: 0.3, height: 60, margin: 1 }} >
          {typeFriends}
        </Button>
        <Button bordered light
          onPress={() => Alert.alert(
            'Attention',
            "Êtes-tu sur de vouloir supprimer cette ami ?",
            [
              {
                text: 'Annuler',
                onPress: () => console.log('Annulation de la suppression')
              },
              {
                text: 'Supprimer',
                onPress: () => fetch('https://gestarot-api.lerna.eu/api/logged_user/friends/' + friendsSave.id, {
                  method: 'DELETE',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'api-token': this.state.token1
                  },
                }).then((response) => response.json())
                  .then((responseJson) => {
                    if (responseJson.status == 'error') {
                      // console.log("ERROR", responseJson.status)
                      alert('Vérifier votre connexion internet, avant de cliquer sur OK');
                    }
                    else {
                      // console.log("friends supprimer", responseJson)
                      this.props.onPress
                      return responseJson;
                    }
                  })
              }
            ],
            { cancelable: true },
          )}
          backgroundColor='rgba(52, 52, 52, 0.6)'
          style={{ flex: 1, height: 60, margin: 1 }} >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Text style={{
              textAlign: 'center',
              color: "white"
            }}>{this.props.friendsSave.username}</Text>
          </View>
        </Button>
      </View>
    )
  }
}

export default (FriendsSave);