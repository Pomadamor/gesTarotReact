import React, { Component } from "react";
import { View, Text, Button } from "native-base";
import { connect } from 'react-redux'
import { Image } from 'react-native';


/**
 * Component permet d'afficher la premiere ligne du tableau game
 */

class InitGame extends Component {

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

    if (this.props.joueurs.length == 0) {
      const nbJoueurChoose = this.props.nbJoueur;

      for (let i = 1; i <= nbJoueurChoose; i++) {
        this.props.joueurs.push(`Joueur ${i}`)
      }
    }

    if (this.props.nbJoueur > 3) {
      joueurFour = <Button bordered light
        style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }}
      >
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image source={this.props.avatar4} />
          <Text style={{
            textAlign: 'center',
            textTransform: 'lowercase',
            color: "white"
          }}
          >
            {this.props.pseudo4.username}
          </Text>
        </View>
      </Button>
    } else {
      joueurFour = <View></View>
    }

    if (this.props.nbJoueur > 4) {
      joueurFive = <Button bordered light
        style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }}
      >
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image source={this.props.avatar5} />
          <Text style={{
            textAlign: 'center',
            textTransform: 'lowercase',
            color: "white"
          }}
          >
            {this.props.pseudo5.username}
          </Text>
        </View>
      </Button>
    } else {
      joueurFive = <View></View>
    }

    return (
      <View style={{ flexDirection: 'row' }}>
        <Button bordered light
          style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }}
        >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Text style={{ color: "white" }}>Info</Text>
          </View>
        </Button>
        <Button bordered light
          style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }}
        >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image source={this.props.avatar1} />
            <Text style={{
              textAlign: 'center',
              textTransform: 'lowercase',
              color: "white"
            }}>{this.props.pseudo1}
            </Text>
          </View>
        </Button>
        <Button bordered light
          style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image source={this.props.avatar2} />
            <Text style={{
              textAlign: 'center',
              textTransform: 'lowercase',
              color: "white"
            }}>{this.props.pseudo2.username}</Text>
          </View>
        </Button>
        <Button bordered light
          style={{ flex: 1, height: 100, margin: 1, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image source={this.props.avatar3} />
            <Text style={{
              textAlign: 'center',
              textTransform: 'lowercase',
              color: "white"
            }}>{this.props.pseudo3.username}</Text>
          </View>
        </Button>
        {joueurFour}
        {joueurFive}
      </View>
    )
  }
}


const mapStateToProps = state => {
  return {
    joueurs: state.toogleScore.joueurs,
    nbJoueur: state.toogleScore.nbJoueur,
    avatar1: state.tooglePlayer.avatar1,
    avatar2: state.tooglePlayer.avatar2,
    avatar3: state.tooglePlayer.avatar3,
    avatar4: state.tooglePlayer.avatar4,
    avatar5: state.tooglePlayer.avatar5,
    pseudo1: state.tooglePlayer.pseudo1,
    pseudo5: state.tooglePlayer.pseudo5,
    pseudo2: state.tooglePlayer.pseudo2,
    pseudo3: state.tooglePlayer.pseudo3,
    pseudo4: state.tooglePlayer.pseudo4,
    choosePlayer: state.tooglePlayer.choosePlayer,
  }
}

export default connect(mapStateToProps)(InitGame);