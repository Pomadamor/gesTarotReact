import React, { Component } from 'react';
import { View, Linking, Image, Alert } from 'react-native'
import { Button, Text, Icon } from 'native-base';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";

/**
 * Component permet de gérer l'affichage de la vue permettant de modifier l'image de l'utilisateur.
 */

class ImageScreen extends Component {

  /**
* Les trois fonctions suivante permette de gérer le retour du clavier
*/

  btnChoose(logo) {
    console.log("logo",logo)
    const action = { type: "MUTATION_IMAGE", value: logo }
    const actionAvatar = { type: "MUTATION_AVATAR", value: logo }

    AsyncStorage.setItem("image", logo.toString())
    AsyncStorage.setItem("avatar", logo.toString())

    this.props.dispatch(action)
    this.props.dispatch(actionAvatar)
    this.props.navigation.navigate("Color")
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("User"); // works best when the goBack is async
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
                onPress: () => this.btnChoose(logo = require('../../assets/img/icon_user/sheep.png'))
                }
            ],
            { cancelable: true },
            )}
          style={{flex:1, resizeMode:'center', height:"90%", marginTop: 10, marginLeft:10, margin:10, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
            <View style={{width:"100%", alignItems:"center"}}>
            <Image
                source={require('../../assets/img/icon_user/sheep.png')}
                style={{ 
                    height: 50, 
                    width: 50, 
                    marginTop: 5, 
                    marginLeft: 5,
                    marginRight: 5 }} />
            </View>
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
                    onPress: () => this.btnChoose(logo = require('../../assets/img/icon_user/baby-face-outline.png'))
                    }
                ],
                { cancelable: true },
                )}            style={{ flex: 1, alignContent: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
            <View style={{ width: "100%", alignItems: "center" }}>
            <Image
                source={require('../../assets/img/icon_user/baby-face-outline.png')}
                style={{ 
                    height: 50, 
                    width: 50, 
                    marginTop: 5, 
                    marginLeft: 5,
                    marginRight: 5 }} />
            </View>
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
                    onPress: () => this.btnChoose(logo = require('../../assets/img/icon_user/cat.png'))
                    }
                ],
                { cancelable: true },
                )}            style={{ flex: 1, resizeMode: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
            <View style={{ width: "100%", alignItems: "center" }}>
            <Image
                source={require('../../assets/img/icon_user/cat.png')}
                style={{ 
                    height: 50, 
                    width: 50, 
                    marginTop: 5, 
                    marginLeft: 5,
                    marginRight: 5 }} />
            </View>
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
                    onPress: () => this.btnChoose(logo = require('../../assets/img/icon_user/dog.png'))
                    }
                ],
                { cancelable: true },
                )}            style={{ flex: 1, alignContent: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
            <View style={{ width: "100%", alignItems: "center" }}>
            <Image
                source={require('../../assets/img/icon_user/dog.png')}
                style={{ 
                    height: 50, 
                    width: 50, 
                    marginTop: 5, 
                    marginLeft: 5,
                    marginRight: 5 }} />
            </View>
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
                    onPress: () => this.btnChoose(logo = require('../../assets/img/icon_user/emoticon-devil.png'))
                    }
                ],
                { cancelable: true },
                )}            style={{ flex: 1, resizeMode: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
            <View style={{ width: "100%", alignItems: "center" }}>
            <Image
                    source={require('../../assets/img/icon_user/emoticon-devil.png')}
                    style={{ 
                        height: 50, 
                        width: 50, 
                        marginTop: 5, 
                        marginLeft: 5,
                        marginRight: 5 }} />
            </View>
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
                    onPress: () => this.btnChoose(logo = require('../../assets/img/icon_user/happy.png'))
                    }
                ],
                { cancelable: true },
                )}            style={{ flex: 1, alignContent: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
            <View style={{ width: "100%", alignItems: "center" }}>
            <Image
                    source={require('../../assets/img/icon_user/happy.png')}
                    style={{ 
                        height: 50, 
                        width: 50, 
                        marginTop: 5, 
                        marginLeft: 5,
                        marginRight: 5 }} />
            </View>
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
                    onPress: () => this.btnChoose(logo = require('../../assets/img/icon_user/pig.png'))
                    }
                ],
                { cancelable: true },
                )}          style={{flex:1, resizeMode:'center', height:"90%", marginTop: 10, marginLeft:10, margin:10, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
          <Image
                    source={require('../../assets/img/icon_user/pig.png')}
                    style={{ 
                        height: 50, 
                        width: 50, 
                        marginTop: 5, 
                        marginLeft: 5,
                        marginRight: 5 }} />
            </View>
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
                    onPress: () => this.btnChoose(logo = require('../../assets/img/icon_user/pirate.png'))
                    }
                ],
                { cancelable: true },
                )}            style={{ flex: 1, alignContent: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
            <View style={{ width: "100%", alignItems: "center" }}>
            <Image
                    source={require('../../assets/img/icon_user/pirate.png')}
                    style={{ 
                        height: 50, 
                        width: 50, 
                        marginTop: 5, 
                        marginLeft: 5,
                        marginRight: 5 }} />
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
    image: state.toogleUser.image,
    avatar: state.toogleUser.avatar,
  }
}

export default connect(mapStateToProps)(ImageScreen)
