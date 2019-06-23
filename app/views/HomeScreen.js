import React, { Component } from 'react';
import { Button, View, Text, Icon} from 'native-base';
import { Image } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{height: 100}}>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 5, marginLeft: 5}}>
            <View 
            style={{
              flex: 2, 
              height: 100, 
              flexDirection: 'row', 
              backgroundColor:'rgba(52, 52, 52, 0.6)'}}
            >
              <Image
              onPress={() => this.props.navigation.navigate("User")}Ò
              source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Oudlers1910.PNG'}} style={{height: 90,width: 90, marginTop: 5, marginLeft: 5, marginRight: 5}}/>
              <View style={{
                margin: 10,
                fontSize: 17, 
                height: 100, 
                width: 100
                }}>
                <Text 
                onPress={() => this.props.navigation.navigate("User")}
                style={{
                  fontSize: 17, 
                  color:"white",
                  fontWeight: 'bold'
                  }}>Lerna</Text>
                <Text 
                onPress={() => this.props.navigation.navigate("User")}
                style={{
                  fontSize: 17, 
                  marginTop: 4,
                  color:"white",
                  }}>% de victoire</Text>
              </View>
            </View>
            <View style={{flex: 1, height: 50}} />
            <View style={{flex: 0.5, height: 50}}>
            <Button rounded light
            onPress={() => this.props.navigation.navigate("Menu")}
            style={{backgroundColor:'steelblue',
            margin:4,
            }}>
              <Icon 
              active name="arrow-forward" 
              style={{
                color:'white',
              }}
               />
            </Button>
              
            </View>
          </View>
        </View>

        <View style={{height: 100}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{
              flex: 1, 
              margin: 4,
              paddingTop:30,
              height: 100,  
              backgroundColor: 'rgba(52, 52, 52, 0.7)',
              }}>
              <Button  transparent light 
              style={{
                padding:12,
              }}
              onPress={() => this.props.navigation.navigate("Game",{nbJoueur:3})}>
                <View>
                  <Image
                    style={{
                      tintColor:"#FFFFFF",
                      height:50,
                      width:100,
                      resizeMode:'center',
                      paddingRight:10
                    }}
                    source={require('../assets/img/joueurs_three.png')}
                  />
                  <Text style={{
                    fontSize: 17,
                    textAlign: 'center', 
                    color:"white"}}
                  >Jouer à 3</Text>
                </View>
                
              </Button>
            </View>
            <View style={{flex: 1, margin: 4, paddingTop:30, height: 100,  backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
              <Button   transparent light 
              style={{
                padding:12,
              }}
              onPress={() => this.props.navigation.navigate("Game",{nbJoueur:4})}>
                <View>
                  <Image
                    style={{
                      tintColor:"#FFFFFF",
                      height:50,
                      width:100,
                      resizeMode:'center',
                      paddingRight:10
                    }}
                    source={require('../assets/img/joueurs_four.png')}
                  />
                  <Text style={{
                    fontSize: 17,
                    textAlign: 'center', 
                    color:"white"}}
                  >Jouer à 4</Text>
                </View>
              </Button>
            </View>
            <View style={{flex: 1, margin: 4, paddingTop:30, height: 100,  backgroundColor: 'rgba(52, 52, 52, 0.9)'}}>
              <Button  transparent light 
              style={{
                padding:12,
              }}
              onPress={() => this.props.navigation.navigate("Game",{nbJoueur:5})}>
              <View>
                  <Image
                    style={{
                      tintColor:"#FFFFFF",
                      height:50,
                      width:100,
                      resizeMode:'center',
                      paddingRight:10
                    }}
                    source={require('../assets/img/joueurs_five.png')}
                  />
                  <Text style={{
                    fontSize: 17,
                    textAlign: 'center', 
                    color:"white"}}
                  >Jouer à 5</Text>
                </View>
              </Button>
            </View>
          </View>
        </View>

        <View style={{height: 60, flexDirection: 'row'}}>
          <View style={{flex: 1, height: 50}}>
            <Button rounded light
            style={{
            margin:4,
            width:200}}>
              <Text>Partager</Text>
            </Button>
          </View>
          <View style={{flex: 1, height: 50}}>
            <Button rounded light
            style={{backgroundColor:'powderblue',
            margin:4,
            width:200}}>
              <Text>Noter</Text>
            </Button>
          </View>
        </View>
      </View>



            
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}