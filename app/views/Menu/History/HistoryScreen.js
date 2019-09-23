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

  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Menu"); // works best when the goBack is async
    return true;
  }
  

  render() {
      historyGrill = this.props.party[0]
      console.log("test history 001", historyGrill)
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{ flex: 1, margin:20, flexDirection: 'row' }}>
        <FlatList
          data={historyGrill}
          keyExtractor={(item) => item.game_id}
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
