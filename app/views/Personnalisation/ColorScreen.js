import React, { Component } from 'react';
import { View, Alert } from 'react-native'
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";

class ColorScreen extends Component {

  /**
* Les trois fonctions suivante permette de gérer le retour du clavier
*/

  async btnChoose(couleur) {
      const token = this.props.token
      const image = this.props.image
      const color = couleur
  
      try {
        console.log('test color', image, color)
          const res = await fetch('https://gestarot-api.lerna.eu/api/logged_user', {
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'api-token':token
              },
              body: JSON.stringify({
                  "color":color,
                  "image":image
              })
          });
          if (res.ok) {
              console.log("RESPONSE TRUE", couleur)
              AsyncStorage.setItem("color", couleur)
              const action = { type: "MUTATION_COLOR", value: color }
              this.props.dispatch(action)
              this.props.navigation.navigate("Home")

          } else {
              console.log("RESPONSE FALSE", res.error)
              alert("Le numéro de téléphone ou l'email existe déjà.");
          }
      } catch (e) {
      console.log(e);          
      }

      fetch('https://gestarot-api.lerna.eu/api/logged_user', {
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
                  this.props.navigation.navigate("Choose");
              }
              else{
                  console.log("PPPLLLIIIPPP", responseJson)

                  console.log("plip", responseJson["user"])

                  return responseJson;
              }
          })
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Image"); // works best when the goBack is async
    return true;
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button bordered light
            onPress={() => Alert.alert(
            "Choix de l'image",
            "Êtes-vous sur de vouloir choisir le mouton comme avatar ?",
            [
                {
                text: 'Non',
                onPress: () => console.log('Ask me later pressed')
                },
                {
                text: 'Oui',
                onPress: () => this.btnChoose(couleur = "aquamarine")
                }
            ],
            { cancelable: true },
            )}
            style={{flex:1, resizeMode:'center', height:"90%", marginTop: 10, marginLeft:10, margin:10, backgroundColor:"aquamarine"}} >
          </Button>
          <Button bordered light 
            onPress={() => Alert.alert(
                "Choix de l'image",
                "Êtes-vous sur de vouloir choisir le bébé comme avatar ?",
                [
                    {
                    text: 'Non',
                    onPress: () => console.log('Ask me later pressed')
                    },
                    {
                    text: 'Oui',
                    onPress: () => this.btnChoose(couleur = "brown")
                    }
                ],
                { cancelable: true },
                )}            style={{ flex: 1, alignContent: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: "brown" }} >
          </Button>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button bordered light
            onPress={() => Alert.alert(
                "Choix de l'image",
                "Êtes-vous sur de vouloir choisir le chat comme avatar ?",
                [
                    {
                    text: 'Non',
                    onPress: () => console.log('Ask me later pressed')
                    },
                    {
                    text: 'Oui',
                    onPress: () => this.btnChoose(couleur = "coral")
                    }
                ],
                { cancelable: true },
                )}            style={{ flex: 1, resizeMode: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'coral' }} >
          </Button>
          <Button bordered light
            onPress={() => Alert.alert(
                "Choix de l'image",
                "Êtes-vous sur de vouloir choisir le chien comme avatar ?",
                [
                    {
                    text: 'Non',
                    onPress: () => console.log('Ask me later pressed')
                    },
                    {
                    text: 'Oui',
                    onPress: () => this.btnChoose(couleur = "lightblue")
                    }
                ],
                { cancelable: true },
                )}            style={{ flex: 1, alignContent: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: "lightblue" }} >
          </Button>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button bordered light
            onPress={() => Alert.alert(
                "Choix de l'image",
                "Êtes-vous sur de vouloir choisir le diable comme avatar ?",
                [
                    {
                    text: 'Non',
                    onPress: () => console.log('Ask me later pressed')
                    },
                    {
                    text: 'Oui',
                    onPress: () => this.btnChoose(couleur = "lemonchiffon")
                    }
                ],
                { cancelable: true },
                )}            style={{ flex: 1, resizeMode: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'lemonchiffon' }} >
          </Button>
          <Button bordered light
            onPress={() => Alert.alert(
                "Choix de l'image",
                "Êtes-vous sur de vouloir choisir le bonhomme comme avatar ?",
                [
                    {
                    text: 'Non',
                    onPress: () => console.log('Ask me later pressed')
                    },
                    {
                    text: 'Oui',
                    onPress: () => this.btnChoose(couleur = "lightpink")
                    }
                ],
                { cancelable: true },
                )}            style={{ flex: 1, alignContent: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'lightpink' }} >
          </Button>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>

          <Button bordered light 
            onPress={() => Alert.alert(
                "Choix de l'image",
                "Êtes-vous sur de vouloir choisir le cochon comme avatar ?",
                [
                    {
                    text: 'Non',
                    onPress: () => console.log('Ask me later pressed')
                    },
                    {
                    text: 'Oui',
                    onPress: () => this.btnChoose(couleur = 'mistyrose')
                    }
                ],
                { cancelable: true },
                )}          
                style={{flex:1, resizeMode:'center', height:"90%", marginTop: 10, marginLeft:10, margin:10, backgroundColor:'mistyrose'}} >
          </Button>
          <Button bordered light
            onPress={() => Alert.alert(
                "Choix de l'image",
                "Êtes-vous sur de vouloir choisir le pirate comme avatar ?",
                [
                    {
                    text: 'Non',
                    onPress: () => console.log('Ask me later pressed')
                    },
                    {
                    text: 'Oui',
                    onPress: () => this.btnChoose(couleur = "silver")
                    }
                ],
                { cancelable: true },
                )}            style={{ flex: 1, alignContent: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'silver' }} >
          </Button>
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    token: state.toogleUser.token,
    verif: state.toogleUser.verif,
    color: state.toogleUser.color,
    image: state.toogleUser.image,
  }
}

export default connect(mapStateToProps)(ColorScreen)
