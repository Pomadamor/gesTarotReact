import React, { Component } from 'react';
import { View, FlatList } from 'react-native'
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
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <FlatList
                data={[
                    {
                        date: '01/01/42',
                        name: "En cours",
                    },
                    {
                        date: '01/01/42',
                        name: "name",
                    },
                    {
                        date: '01/01/42',
                        name: "name",
                    },
                    {
                        date: '01/01/42',
                        name: "name",
                    },
                    {
                        date: '01/01/42',
                        name: "name",
                    },
                    {
                        date: '01/01/42',
                        name: "name",
                    }
                ]}
                renderItem={({item}) => 
                <View style={{ flex: 1,alignContent: 'center', padding: 15, height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' , flexDirection: 'row' }}>
                    <View style={{flex:1}}>
                        <ListItem
                            roundAvatar
                            title={item.date}
                            subtitle={item.name}
                        />
                    </View>
                    <View style={{flex:0.2}}>
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
    verif: state.toogleUser.verif
  }
}

export default connect(mapStateToProps)(HistoryScreen)
