import React, { Component } from 'react';
import { View, Alert } from 'react-native'
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native'

class ColorScreen extends Component {

  /**
* Les trois fonctions suivante permette de gérer le retour du clavier
*/

  btnChoose(color) {
    const action = { type: "MUTATION_COLOR", value: color }
    this.props.dispatch(action)
    this.props.navigation.navigate("Home")
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
                onPress: () => this.btnChoose(color = "aquamarine")
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
                    onPress: () => this.btnChoose(color = "brown")
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
                    onPress: () => this.btnChoose(color = "coral")
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
                    onPress: () => this.btnChoose(color = "lightblue")
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
                    onPress: () => this.btnChoose(color = "lemonchiffon")
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
                    onPress: () => this.btnChoose(color = "lightpink")
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
                    onPress: () => this.btnChoose(color = 'mistyrose')
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
                    onPress: () => this.btnChoose(color = "silver")
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
    verif: state.toogleUser.verif
  }
}

export default connect(mapStateToProps)(ColorScreen)
