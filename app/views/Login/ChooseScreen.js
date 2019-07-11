import React, { Component } from "react";
import { ImageBackground, View, Text, Alert } from 'react-native';
import { connect } from "react-redux"
import { Button } from "native-base";

class ChooseScreen extends Component {



  /**
   * Cette fonction permet de gérer l'action qui se passe au clic du bouton de "demarrer une partie" vers la prochaine vue
   * @param nb défini le nombre de joueur choisi
   */

  btnChoose(nb) {
    const action = { type: "MUTATION_NBJOUEURS", value: nb }
    this.props.dispatch(action)
    this.props.navigation.navigate("FriendsPlayers")
  }

  /**
   * Ce render met en place la vue initial en l'absence de connection
  */

  render() {
    return (
      <ImageBackground source={require("../../assets/img/fond.png")} style={{ width: '100%', height: '100%' }}>
        <View style={styles.viewGen}>
          <Button style={styles.viewCat}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={styles.textCat}>S'INSCRIRE</Text>
            <Text style={styles.detailCat}
            >Rejoinds la communauté GesTarot et profite ainsi de l'ensemble des fonctionnalités de l'application.
              </Text>
          </Button>

          <Button style={styles.viewCat}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.textCat}>S'AUTHENTIFIER</Text>
            <Text style={styles.detailCat}
            >Tu es déjà inscrit ?! Connecte toi afin de retrouver ton compte, statisques, ami(es)...
              </Text>
          </Button>
          <Button style={styles.viewCat}
            onPress={() => Alert.alert(
              'Démarer sans inscription',
              "Veuillez choisir le nombre de joueur. Pour jouer à 5, une inscription est nescessaire !",
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Ask me later pressed')
                },
                {
                  text: '3',
                  onPress: () => this.btnChoose(nb = 3)
                },
                {
                  text: '4',
                  onPress: () => this.btnChoose(nb = 4)
                }
              ],
              { cancelable: true },
            )}>
            <Text style={styles.textCat}>DEMARRER UNE PARTIE</Text>
            <Text style={styles.detailCat}
            >Tu préferes tester l'application avant de t'inscrire, c'est possible en cliquant ici ;).
              </Text>
          </Button>
        </View>
      </ImageBackground>
    )
  }
}

const styles = {
  viewGen: {
    flex: 1,
    flexDirection: 'column',
  },
  viewCat: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.6)'
  },
  textCat: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "white",
  },
  detailCat:
  {
    marginLeft: 40,
    marginRight: 40,
    fontSize: 17,
    textAlign: 'justify',
    color: "white"
  },
}

const mapStateToProps = state => {
  return {
    nbJoueur: state.toogleScore.nbJoueur
  }
}

export default connect(mapStateToProps)(ChooseScreen);