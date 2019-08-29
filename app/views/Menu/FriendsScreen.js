import React, { Component } from 'react';
import { View, FlatList } from 'react-native'
import { Button, Text, Icon } from 'native-base';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";
import { List, ListItem } from 'react-native-elements'



class FriendsScreen extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Home"); // works best when the goBack is async
    return true;
  }

  /**
* Fonction qui permet au clic de l'utilisateur sur disconnect, de se deconnecter
*/

  disconnect() {
    const actionVerif = { type: "MUTATION_VERIF", value: false }
    this.props.dispatch(actionVerif)
    AsyncStorage.removeItem("token")
    this.props.navigation.navigate("Choose")
  }

  /**
* ce rendu permet de gérer l'affichage du menu
* Les zones commentés correspondent à des améliorations en cour
*/

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <FlatList
                data={[
                    {
                    name: 'jyhem',
                    avatar_url: require("../../assets/img/icon_user/sheep.png"),
                    subtitle: 'Vice President'
                    },
                    {
                    name: 'Jean',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman'
                    },
                    {
                    name: 'Sandhose',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President'
                    },
                    {
                    name: 'Bato',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman'
                    },
                    {
                    name: 'Lerna',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President'
                    },
                    {
                    name: 'Lautre',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman'
                    }
                ]}
                renderItem={({item}) => 
                <View style={{ flex: 1,
                // alignContent: 'center', padding: 15, height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' , flexDirection: 'row' 
                }}>
                    <View style={{flex:1}}>
                        <ListItem
                            roundAvatar
                            title={item.name}
                            subtitle={item.subtitle}
                            avatar={{uri:item.avatar_url}}
                        >
                            <Button rounded light
                                onPress={() => this.props.navigation.navigate("Menu")}
                                style={{
                                backgroundColor: 'gray',
                                margin: 4,
                                }}>
                                <Icon
                                active name="arrow-forward"
                                style={{
                                    color: 'white',
                                }}
                                />
                            </Button>
                        </ListItem>
                    </View>
                    {/* <View style={{flex:0.2}}>
                    <Button rounded light
                        onPress={() => this.props.navigation.navigate("Menu")}
                        style={{
                        backgroundColor: 'gray',
                        margin: 4,
                        }}>
                        <Icon
                        active name="arrow-forward"
                        style={{
                            color: 'white',
                        }}
                        />
                    </Button>
                    </View>   */}
                </View>

                }
                keyExtractor={item => item.name}
            />
        </View>
        <View style={{ flex: 0.1, flexDirection: 'row' }}>
            <View style={{flex:1}}>
            </View>
            <View style={{flex:0.2}}>
                <Button rounded light
                    onPress={() => this.props.navigation.navigate("User")}
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
    verif: state.toogleUser.verif
  }
}

export default connect(mapStateToProps)(FriendsScreen)
