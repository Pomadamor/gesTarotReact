import React, { Component } from 'react';
import { View, FlatList, Alert } from 'react-native'
import { Button, Text, Icon } from 'native-base';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native'
import HistoryGrill from './HistoryGrillScreen'

/**
 * Component permet de gérer l'affichage de la vue des amis (ou pas).
 */

class HistoryScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
        party: this.props.party,
    }
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    fetch('https://gestarot-api.lerna.eu/api/history/party', {
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
                      console.log("detail response party", responseJson)

                      if(responseJson["party"].length > 0){
                        const actionParty = { type: "MUTATION_PARTY", value: responseJson["party"]}
                        this.props.dispatch(actionParty)
                      }
                      return responseJson;
                  }
              })

  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Menu"); // works best when the goBack is async
    return true;
  }
  

  render() {
      historyGrill = this.state.party[0]
      console.log("test friends 001", historyGrill[0])
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{ flex: 1, margin:20, flexDirection: 'row' }}>
        <FlatList
          data={historyGrill}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <HistoryGrill historyGrill={item} />}
        />
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    verif: state.toogleUser.verif,
    party: state.toogleParty.party,
    token: state.toogleUser.token
  }
}

export default connect(mapStateToProps)(HistoryScreen)
