import React, { Component } from 'react';
import {View} from 'react-native'
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Title } from 'native-base';

export default class MenuScreen extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button bordered light 
          onPress={() => this.props.navigation.navigate("Stat")}
          style={{flex:1, resizeMode:'center', height:"90%", marginTop: 10, marginLeft:10, margin:10, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
            <View style={{width:"100%", alignItems:"center"}}>
              <Icon active name="ios-stats" />
              <Text>Statistique</Text>
            </View>
          </Button>
          <Button bordered light style={{flex:1, alignContent:'center', height:"90%", marginTop: 10, marginLeft:10, margin:10, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
              <Icon active name="beer"/>
              <Text>Amis</Text>
            </View>
          </Button>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button bordered light 
          onPress={() => this.props.navigation.navigate("History")}
          style={{flex:1, resizeMode:'center', height:"90%", marginTop: 10, marginLeft:10, margin:10, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
              <Icon active name="ios-stats" />
              <Text>Historique des parties</Text>
            </View>
          </Button>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button bordered light 
          onPress={() => this.props.navigation.navigate("Legal")}
          style={{flex:1, resizeMode:'center', height:"90%", marginTop: 10, marginLeft:10, margin:10, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
              <Icon active name="star" />
              <Text>Information</Text>
            </View>
          </Button>
          <Button bordered light 
          onPress={() => this.props.navigation.navigate("Legal")}
          style={{flex:1, alignContent:'center', height:"90%", marginTop: 10, marginLeft:10, margin:10, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
              <Icon active name="beer"/>
              <Text>Mention légales</Text>
            </View>
          </Button>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button bordered light 
          onPress={() => this.props.navigation.navigate("Note")}
          style={{flex:1, resizeMode:'center', height:"90%", marginTop: 10, marginLeft:10, margin:10, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
              <Icon active name="star" />
              <Text>noter</Text>
            </View>
          </Button>
          <Button bordered light 
          onPress={() => this.props.navigation.navigate("Choose")}
          style={{flex:1, alignContent:'center', height:"90%", marginTop: 10, marginLeft:10, margin:10, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
              <Icon active name="beer"/>
              <Text>Deconnexion</Text>
            </View>
          </Button>
        </View>
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}