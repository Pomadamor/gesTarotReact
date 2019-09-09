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

  componentWillMount(){
    const token = this.props.token
    if (this.props.pseudo == "Joueur" || this.props.pseudo == undefined ) {

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
                var user = responseJson["user"]
                console.log("detail user", user)
                console.log("detail user 1", user.avatar)


                if(user.avatar == null){

                  console.log("detail user 2")

                  const avatar = { type: "MUTATION_AVATAR", value: parseInt(user.image)}
                  this.props.dispatch(avatar)

                  console.log("detail user 3", this.props.avatar)
                }else{

                  const avatar = { type: "MUTATION_AVATAR", value: user.avatar }
                  this.props.dispatch(avatar)
                }
                  console.log("detail response user", user)

                  const id = { type: "MUTATION_ID", value: user.id }
                  const pseudo = { type: "MUTATION_PSEUDO", value: user.username }
                  const email = { type: "MUTATION_EMAIL", value: user.email }
                  const phone = { type: "MUTATION_PHONE", value: user.phone }
                  const actionVerif = { type: "MUTATION_VERIF", value: true }
                  // const color = { type: "MUTATION_COLOR", value: user.color }
                  const image = { type: "MUTATION_IMAGE", value: parseInt(user.image) }

                  // this.props.dispatch(color)
                  this.props.dispatch(image)
                  this.props.dispatch(actionVerif)
                  this.props.dispatch(id)
                  this.props.dispatch(email)
                  this.props.dispatch(pseudo)
                  this.props.dispatch(phone)

                  return responseJson;
              }
          })

          fetch('https://gestarot-api.lerna.eu/api/logged_user/friends', {
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
                  }
                  else{
                      console.log("detail response friends", responseJson)

                      if(responseJson["friends"].length > 0){
                        const actionFriends = { type: "MUTATION_FRIENDS", value: responseJson["friends"]}
                        this.props.dispatch(actionFriends)
                      }
                      return responseJson;
                  }
              })
              console.log("test home 002", this.props.friends)
        }
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
                height: 70,
                flexDirection: 'row',
                backgroundColor: 'rgba(52, 52, 52, 0.6)'
              }}
            >
              <Image
                onPress={() => this.props.navigation.navigate("User")}
                source={this.props.avatar} style={{ height: 60, backgroundColor:this.props.color, width: 60, marginTop: 5, marginLeft: 5, marginRight: 5 }} />
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
                  margin: 0,
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
            <Button bordered light
              onPress={() => this.btnChoose(nb = 3)}
              style={{ flex: 1, resizeMode: 'center', height: "100%", marginTop: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
              <View style={{ width: "100%", alignItems: "center" }}>
                <Image
                    style={{
                      tintColor: "#FFFFFF",
                      height: 50,
                      width: 100,
                      resizeMode: 'center',
                    }}
                    source={require('../assets/img/joueurs_three.png')}
                  />
                <Text style={{
                    fontSize: 17,
                    textAlign: 'center',
                    color: "white"}}>Jouer à 3</Text>
              </View>
            </Button>

            <Button bordered light
              onPress={() => this.btnChoose(nb = 4)}
              style={{ flex: 1, resizeMode: 'center', height: "130%", marginBottom: 50, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
              <View style={{ width: "100%", alignItems: "center" }}>
                <Image
                    style={{
                      tintColor: "#FFFFFF",
                      height: 50,
                      width: 100,
                      resizeMode: 'center',
                    }}
                    source={require('../assets/img/joueurs_four.png')}
                  />
                <Text style={{
                    fontSize: 17,
                    textAlign: 'center',
                    color: "white"}}>Jouer à 4</Text>
              </View>
            </Button>

            <Button bordered light
              onPress={() => this.btnChoose(nb = 5)}
              style={{ flex: 1, resizeMode: 'center', height: "100%", marginTop: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
              <View style={{ width: "100%", alignItems: "center" }}>
                <Image
                    style={{
                      tintColor: "#FFFFFF",
                      height: 50,
                      width: 100,
                      resizeMode: 'center',
                    }}
                    source={require('../assets/img/joueurs_five.png')}
                  />
                <Text style={{
                    fontSize: 17,
                    textAlign: 'center',
                    color: "white"}}>Jouer à 5</Text>
              </View>
            </Button>
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
    color: state.toogleUser.color,
    image: state.toogleUser.image,
    token: state.toogleUser.token,
    friends: state.toogleFriends.friends,
  }
}

export default connect(mapStateToProps)(HomeScreen, UserScreen);