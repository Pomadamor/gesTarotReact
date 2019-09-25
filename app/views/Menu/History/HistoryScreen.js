import React, { Component } from 'react';
import { View, FlatList, Alert } from 'react-native'
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
        watchParty: this.props.watchParty
    }

    this.navigate = this.navigate.bind(this);
  }
  componentDidMount() {
    if(this.props.party.length == 0){
      alert("Tu n'as pas encore enregistré ou participé à une partie.")
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

  navigate(responseJson) {
    // console.log('Est passé dans le navigate ploplop', responseJson)
    // console.log('Est passé dans le navigate ploplop', this.onPress)

    const actionWatchParty = { type: "MUTATION_WATCH_PARTY", value: responseJson}
    this.props.dispatch(actionWatchParty)

 
    this.props.navigation.navigate("Game");
  }

  render() {
      historyGrill = this.props.party[0]
      // console.log("test history 001", historyGrill)
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{ flex: 1, margin:20, flexDirection: 'row' }}>
        <FlatList
          data={historyGrill}
          keyExtractor={({game_id}) => game_id}
          renderItem={({ item }) => <HistoryGrill historyGrill={item} onPress={this.navigate}/>}
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
    watchParty: state.toogleParty.watchParty,
    token: state.toogleUser.token
  }
}

export default connect(mapStateToProps)(HistoryScreen)
