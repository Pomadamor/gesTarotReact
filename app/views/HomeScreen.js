import React, { Component } from 'react';
import { Button, View, Text, Icon } from 'native-base';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native'
import UserScreen from './Menu/UserScreen';

class HomeScreen extends Component {

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
* Les trois fonctions suivante permette de gérer le retour du clavier
*/
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Home")
    return true;
  }


  /**
* Ce render gere l'affichage de la vue central de l'application
*/

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{ height: 100 }}>
          <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, marginLeft: 5 }}>
            <View
              style={{
                flex: 2,
                height: 100,
                flexDirection: 'row',
                backgroundColor: 'rgba(52, 52, 52, 0.6)'
              }}
            >
              <Image
                onPress={() => this.props.navigation.navigate("User")}
                source={this.props.avatar} style={{ height: 90, backgroundColor:"antiquewhite", width: 90, marginTop: 5, marginLeft: 5, marginRight: 5 }} />
              <View style={{
                margin: 10,
                fontSize: 17,
                height: 100,
                width: 100
              }}>
                <Text
                  onPress={() => this.props.navigation.navigate("User")}
                  style={{
                    fontSize: 17,
                    color: "white",
                    fontWeight: 'bold'
                  }}>{this.props.pseudo}</Text>
                 <Text
                  onPress={() => this.props.navigation.navigate("User")}
                  style={{
                    fontSize: 15,
                    color: "white",
                  }}>Version Bêta</Text>
              </View>
            </View>
            <View style={{ flex: 1, height: 50 }} />
            <View style={{ flex: 0.5, height: 50 }}>
              <Button rounded light
                onPress={() => this.props.navigation.navigate("Menu")}
                style={{
                  backgroundColor: 'steelblue',
                  margin: 4,
                }}>
                <Icon
                  active name="arrow-forward"
                  style={{
                    color: 'white',
                  }}
                />
              </Button>

            </View>
          </View>
        </View>

        <View style={{ height: 100 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{
              flex: 1,
              margin: 4,
              paddingTop: 30,
              height: 100,
              backgroundColor: 'rgba(52, 52, 52, 0.7)',
            }}>
              <Button transparent light
                style={{
                  padding: 12,
                }}
                onPress={() => this.btnChoose(nb = 3)}>
                <View>
                  <Image
                    style={{
                      tintColor: "#FFFFFF",
                      height: 50,
                      width: 100,
                      resizeMode: 'center',
                      paddingRight: 10
                    }}
                    source={require('../assets/img/joueurs_three.png')}
                  />
                  <Text style={{
                    fontSize: 17,
                    textAlign: 'center',
                    color: "white"
                  }}
                  >Jouer à 3</Text>
                </View>

              </Button>
            </View>
            <View style={{ flex: 1, margin: 4, paddingTop: 30, height: 100, backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
              <Button transparent light
                style={{
                  padding: 12,
                }}
                onPress={() => this.btnChoose(nb = 4)}>
                <View>
                  <Image
                    style={{
                      tintColor: "#FFFFFF",
                      height: 50,
                      width: 100,
                      resizeMode: 'center',
                      paddingRight: 10
                    }}
                    source={require('../assets/img/joueurs_four.png')}
                  />
                  <Text style={{
                    fontSize: 17,
                    textAlign: 'center',
                    color: "white"
                  }}
                  >Jouer à 4</Text>
                </View>
              </Button>
            </View>
            <View style={{ flex: 1, margin: 4, paddingTop: 30, height: 100, backgroundColor: 'rgba(52, 52, 52, 0.9)' }}>
              <Button transparent light
                style={{
                  padding: 12,
                }}
                onPress={() => this.btnChoose(nb = 5)}>
                <View>
                  <Image
                    style={{
                      tintColor: "#FFFFFF",
                      height: 50,
                      width: 100,
                      resizeMode: 'center',
                      paddingRight: 10
                    }}
                    source={require('../assets/img/joueurs_five.png')}
                  />
                  <Text style={{
                    fontSize: 17,
                    textAlign: 'center',
                    color: "white"
                  }}
                  >Jouer à 5</Text>
                </View>
              </Button>
            </View>
          </View>
        </View>

        <View style={{ height: 60, flexDirection: 'row' }}>
          {/* <View style={{ flex: 1, height: 50 }}>
            <Button rounded light
              style={{
                margin: 4,
                width: 200
              }}>
              <Text>Partager</Text>
            </Button>
          </View>
          <View style={{ flex: 1, height: 50 }}>
            <Button rounded light
              style={{
                backgroundColor: 'powderblue',
                margin: 4,
                width: 200
              }}>
              <Text>Noter</Text>
            </Button>
          </View> */}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    nbJoueur: state.toogleScore.nbJoueur,
    avatar: state.toogleUser.avatar,
    pseudo: state.toogleUser.pseudo,
  }
}

export default connect(mapStateToProps)(HomeScreen, UserScreen);