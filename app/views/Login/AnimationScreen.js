import React from 'react';
import { StyleSheet, View, Text, Image, I18nManager } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper'

export default class AnimationScreen extends React.Component {


  nextNavigation() {
    this.props.navigation.navigate('Choose');
  }

  render(){
    if (this.props.verif) {
      this.nextNavigation()
    }
    return(
      <Onboarding
        skipLabel="Passer"
        nextLabel="Suivant"
        onSkip={() => this.nextNavigation()}
        onDone={() => this.nextNavigation()}
        pages={[
          {
            backgroundColor: '#404040',
            image: <Image style={{height:400, width:225}} source={require("../../assets/img/img_user/homeAni.jpg")} />,
            title: 'Accueil',
            subtitle: 'Arrivé après inscription',
          },
          {
            backgroundColor: '#404040',
            image: <Image style={{height:400, width:225}}  source={require("../../assets/img/img_user/menuAni.jpg")} />,
            title: 'Menu',
            subtitle: `Au clic sur le menu de l'acceuil`,
          },
          {
            backgroundColor: '#404040',
            image: <Image style={{height:400, width:225}}  source={require("../../assets/img/img_user/scoreAni.jpg")} />,
            title: 'Fin de partie',
            subtitle: `Après le choix des joueurs et le démarage d'une partie`,
          }
          
        ]}
  />)

  }
}