import React, { Component } from 'react';
import { View, FlatList, Alert } from 'react-native'
import { Button, Text, Icon } from 'native-base';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native'
import FriendsSave from './FriendsSaveScreen'

class FriendsScreen extends Component {

    componentWillMount(){
      console.log("verif token", this.props.token)
        const token = this.props.token
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
                      console.log("PPPLLLOOOPPP", responseJson)

                      if(responseJson.length > 0){
                        var responseFriends = responseJson["friends"]
                        var nbFriend = responseJson["friends"] + 1
  
                        for (var i = 0; i < nbFriend; i++) {
                          this.props.friends.push([{
                            id: responseFriends[i].id,
                            username: responseFriends[i].username,
                            email: responseFriends[i].email,
                            phone: responseFriends[i].phone,
                          }])
                        }
  
                        const action = { type: "MUTATION_FRIENDS", value: this.props.friends }
                        this.props.dispatch(action)
                        console.log("je veux savoir", this.props.friends)
  
                      }
                      return responseJson;
                  }
              })
    }

  componentDidMount() {
    if(this.props.friends.length == 0){
      console.log("PLOP", this.props.friends)
      alert("Vous n'avez encore enregistré aucun ami, cliquer sur le plus pour y remédier.");
    }
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Menu"); // works best when the goBack is async
    return true;
  }

  
  /**
* ce rendu permet de gérer l'affichage du menu
* Les zones commentés correspondent à des améliorations en cour
*/

  render() {
    if(this.props.friends != [] || this.props.friends != undefined){
      friendsSave = this.props.friends
    }else{
      friendsSave = []
    }

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{ flex: 1, margin:20, flexDirection: 'row' }}>
        <FlatList
          data={friendsSave}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FriendsSave friendsSave={item} />}
        />
        </View>
        <View style={{ flex: 0.1, flexDirection: 'row' }}>
            <View style={{flex:1}}>
            </View>
            <View style={{flex:0.2}}>
                <Button rounded light
                    onPress={() => this.props.navigation.navigate("AddFriend")}
                    style={{
                    backgroundColor: 'steelblue',
                    margin: 4,
                    }}>
                    <Text style={{
                        color: 'white',
                    }}>+</Text>
                </Button>
            </View>                 
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    verif: state.toogleUser.verif,
    friends: state.toogleFriends.friends,
    token: state.toogleUser.token
  }
}

export default connect(mapStateToProps)(FriendsScreen)
