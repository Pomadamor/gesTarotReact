import React, {Component} from "react";
import { View, Text, Button } from "native-base";
import { Alert } from 'react-native';

/**
 * Component permet de gérer l'affichage de la grille des amis.
 */

class FriendsSave extends Component {
  render(){
    
    console.log("FRIENDS", friendsSave)
    console.log("FRIENDS 1", friendsSave["username"])
    console.log("FRIENDS 3", this.props.friendsSave.username)
      return (
            <View style={{flexDirection: 'row'}}>
                <Button bordered light 
                backgroundColor= 'rgba(52, 52, 52, 0.6)'
                style={{flex:0.3, height:60, margin:1}} >
                    <View style={{width:"100%", alignItems:"center"}}>
                    <Text style={{
                            textAlign: 'center', 
                            color:"white"}}>En attente</Text>
                    </View>
                </Button>
                <Button bordered light 
                    onPress={() => Alert.alert(
                      'Attention',
                      "Êtes-vous sur de vouloir supprimer cette ami ?",
                      [
                        {
                          text: 'Annuler',
                          onPress: () => console.log('Annulation de la suppression')
                        },
                        {
                          text: 'Supprimer',
                          onPress: () => fetch('https://gestarot-api.lerna.eu/api/logged_user/friends/'+friendsSave.id, {
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
                        }
                      ],
                      { cancelable: true },
                    )}
                    backgroundColor='rgba(52, 52, 52, 0.6)'
                    style={{flex:1, height:60, margin:1}} >
                <View style={{width:"100%", alignItems:"center"}}>
                    <Text style={{
                            textAlign: 'center', 
                            color:"white"}}>{this.props.friendsSave.username}</Text>
                    </View>
                </Button>
            </View>
      )
    }
  }

export default (FriendsSave);