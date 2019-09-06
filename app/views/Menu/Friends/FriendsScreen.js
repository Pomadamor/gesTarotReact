import React, { Component } from 'react';
import { View, FlatList, Alert } from 'react-native'
import { Button, Text, Icon } from 'native-base';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native'

class FriendsScreen extends Component {


  componentWillMount(){
    console.log("FRIENDS", this.props.friends)
    if(this.props.friends.length == 0){
      console.log("PLOP", this.props.friends)
      alert("Vous n'avez encore enregistré aucun ami, cliquer sur le plus pour y remédier.");
    }
  }

  componentDidMount() {
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
    friendsSave = this.props.friends

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
    friends: state.toogleFriends.friends
  }
}

export default connect(mapStateToProps)(FriendsScreen)
