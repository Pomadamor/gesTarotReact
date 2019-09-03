import React, { Component } from 'react';
import { View, FlatList, Alert } from 'react-native'
import { Button, Text, Icon } from 'native-base';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";
import { List, ListItem } from 'react-native-elements'



class HistoryScreen extends Component {

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
        <View style={{ flex: 1, margin:20, flexDirection: 'row' }}>
            <FlatList
                data={[
                    {
                    name: 'midi',
                    subtitle: '01/01/42'
                    },
                    {
                    name: 'soir',
                    subtitle: '01/01/42'
                    },
                    {
                    name: 'week-end',
                    subtitle: '01/01/42'
                    },
                    {
                    name: 'pro',
                    subtitle: '01/01/42'
                    },
                    {
                    name: 'famille',
                    subtitle: '01/01/42'
                    },
                    {
                    name: 'autre',
                    subtitle: '01/01/42'
                    }
                ]}
                renderItem={({item}) => 
                <View style={{ flex: 1,
                // alignContent: 'center', padding: 15, height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' , flexDirection: 'row' 
                }}>
                    <View style={{flex:1}}>
                        <ListItem
                             onPress={() => Alert.alert(
                              'Attention',
                              "Que souhaites-tu faire ?",
                              [
                                {
                                  text: 'Annuler',
                                  onPress: () => console.log('Ask me later pressed')
                                },
                                {
                                  text: 'Modifier',
                                  onPress: () => console.log('Ask me later pressed')
                                },
                                {
                                  text: 'Supprimer',
                                  onPress: () => console.log('Ask me later pressed')
                                }
                              ],
                              { cancelable: true },
                            )}
                            roundAvatar
                            title={item.name}
                            subtitle={item.subtitle}                        />
                    </View>
                </View>

                }
                keyExtractor={item => item.name}
            />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
      avatar: state.toogleUser.avatar,
      id: state.toogleUser.id,
  }
}

export default connect(mapStateToProps)(HistoryScreen)
