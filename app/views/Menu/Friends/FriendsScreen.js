import React, { Component } from 'react';
import { View, FlatList, Alert } from 'react-native'
import { Button, Text, Icon } from 'native-base';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native'
import FriendsSave from './FriendsSaveScreen'

/**
 * Component permet de gérer l'affichage de la vue des amis (ou pas).
 */

class FriendsScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      friends: this.props.friends,
    }
    this.navigate = this.navigate.bind(this);
  }


  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    if(this.props.friends.length == 0){
      alert("Tu n'as pas encore d'amis, appuis sur le plus pour en ajouter.")
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Menu"); // works best when the goBack is async
    return true;
  }
  
  navigate(){
    this.props.navigation.navigate("Home")
  }

  render() {
      friendsSave = this.state.friends
      // console.log("test friends 001", friendsSave.username)
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{ flex: 1, margin:20, flexDirection: 'row' }}>
        <FlatList
          data={friendsSave}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FriendsSave friendsSave={item} onPress={this.navigate} />}
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
