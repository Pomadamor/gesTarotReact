import React, {Component} from "react";
import { ImageBackground, View, Text, Alert } from 'react-native';
import {connect} from "react-redux"


class ChooseScreen extends Component {

    btnChooseThreeJoueur(){
      const action = { type: "MUTATION_NBJOUEURS", value: 3 }
      this.props.dispatch(action)
      this.props.navigation.navigate("FriendsPlayers")
    }

    btnChooseFourJoueur(){
      const action = { type: "MUTATION_NBJOUEURS", value: 4 }
      this.props.dispatch(action)
      this.props.navigation.navigate("FriendsPlayers")
    }

    render(){
        return(
        <ImageBackground source={require("../../assets/img/fond.png")} style={{width: '100%', height: '100%'}}>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between'}}>
            <View style={{
              flex:1, 
              marginTop:20, 
              margin:10,
              backgroundColor: 'rgba(52, 52, 52, 0.6)'}}>
              <Text style={{
                marginTop:40, 
                fontSize: 30, 
                fontWeight: 'bold', 
                color:"white",
                marginLeft:40}}
                onPress={() => this.props.navigation.navigate("Register")}
                >S'INSCRIRE
              </Text>
              <Text style={{
                marginLeft:40, 
                marginRight:40,
                fontSize: 17,
                textAlign: 'justify', 
                color:"white"}}
                onPress={() => this.props.navigation.navigate("Register")}
                >Rejoinds la communauté GesTarot et profite ainsi de l'ensemble des fonctionnalités de l'application.
              </Text>
            </View>
            <View style={{flex:1, margin:10, backgroundColor: 'rgba(52, 52, 52, 0.7)'}}>
             <Text style={{
                marginTop:40, 
                fontSize: 30, 
                fontWeight: 'bold', 
                color:"white",
                marginLeft:40
                }}
                onPress={() => this.props.navigation.navigate("Login")}
                >S'AUTHENTIFIER</Text>
                          <Text style={{
                marginLeft:40, 
                marginRight:40,
                fontSize: 17,
                textAlign: 'justify', 
                color:"white"}}
                onPress={() => this.props.navigation.navigate("Login")}
                >Tu es déjà inscrit ?! Connecte toi afin de retrouver ton compte, statisques, ami(es)...
              </Text>
            </View>
            <View style={{flex:1, margin:10, marginBottom:20, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
             <Text style={{
                marginTop:40, 
                fontSize: 30, 
                fontWeight: 'bold', 
                color:"white",
                marginLeft:40
                }}>DEMARRER UNE PARTIE</Text>
              <Text style={{
                marginLeft:40, 
                marginRight:40,
                fontSize: 17,
                textAlign: 'justify', 
                color:"white"}} 
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
                      onPress: () => this.btnChooseThreeJoueur()
                    },
                    {
                      text: '4',
                      onPress: () => this.btnChooseFourJoueur()
                    }
                  ],
                  {cancelable: true},
                )}>Tu préferes tester l'application avant de t'inscrire, c'est possible en cliquant ici ;).
              </Text>
            </View>
          </View>
        </ImageBackground>
        )
    }
}

const mapStateToProps = state => {
  return {
      nbJoueur : state.toogleScore.nbJoueur
  }
}

export default connect(mapStateToProps)(ChooseScreen);
