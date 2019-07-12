import React, { Component } from 'react';
import { View, Linking } from 'react-native'
import { Button, Text, Icon } from 'native-base';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";



class MenuScreen extends Component {
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

  disconnect() {
    const actionVerif = { type: "MUTATION_VERIF", value: false }
    this.props.dispatch(actionVerif)
    AsyncStorage.removeItem("token")
    this.props.navigation.navigate("Choose")
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        {/* <View style={{flex: 1, flexDirection: 'row'}}> */}
        {/* <Button bordered light 
          onPress={() => this.props.navigation.navigate("Stat")}
          style={{flex:1, resizeMode:'center', height:"90%", marginTop: 10, marginLeft:10, margin:10, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
            <View style={{width:"100%", alignItems:"center"}}>
              <Icon active name="ios-stats" />
              <Text>Statistique</Text>
            </View>
          </Button> */}
        {/* <Button bordered light style={{flex:1, alignContent:'center', height:"90%", marginTop: 10, marginLeft:10, margin:10, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
              <Icon active name="beer"/>
              <Text>Amis</Text>
            </View>
          </Button> */}
        {/* </View> */}

        {/* <View style={{flex: 1, flexDirection: 'row'}}>
          <Button bordered light 
          onPress={() => this.props.navigation.navigate("History")}
          style={{flex:1, resizeMode:'center', height:"90%", marginTop: 10, marginLeft:10, margin:10, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
              <Icon active name="ios-stats" />
              <Text>Historique des parties</Text>
            </View>
          </Button>
        </View> */}

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button bordered light
            onPress={() => { Linking.openURL('http://www.letarot.net/fr/rules.html') }}
            style={{ flex: 1, resizeMode: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
            <View style={{ width: "100%", alignItems: "center" }}>
              <Icon active name="star" />
              <Text>Règle du jeu</Text>
            </View>
          </Button>
          <Button bordered light
            onPress={() => { Linking.openURL('https://google.com') }}
            style={{ flex: 1, alignContent: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
            <View style={{ width: "100%", alignItems: "center" }}>
              <Icon active name="beer" />
              <Text>Mention légales</Text>
            </View>
          </Button>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button bordered light
            onPress={() => this.props.navigation.navigate("Scanner")}
            style={{ flex: 1, resizeMode: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
            <View style={{ width: "100%", alignItems: "center" }}>
              <Icon active name="star" />
              <Text>Ble</Text>
            </View>
          </Button>
          {/* <Button bordered light 
          onPress={() => this.props.navigation.navigate("Note")}
          style={{flex:1, resizeMode:'center', height:"90%", marginTop: 10, marginLeft:10, margin:10, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
              <Icon active name="star" />
              <Text>noter</Text>
            </View>
          </Button> */}
          <Button bordered light
            onPress={() => this.disconnect()}
            style={{ flex: 1, alignContent: 'center', height: "90%", marginTop: 10, marginLeft: 10, margin: 10, backgroundColor: 'rgba(52, 52, 52, 0.6)' }} >
            <View style={{ width: "100%", alignItems: "center" }}>
              <Icon active name="beer" />
              <Text>Deconnexion</Text>
            </View>
          </Button>
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

export default connect(mapStateToProps)(MenuScreen)
