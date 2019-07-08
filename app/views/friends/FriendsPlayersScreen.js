import React, { Component } from 'react';
import {View, Text, Image, TextInput, Alert} from 'react-native'
import { Label, Button} from 'native-base';
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'
import { BackHandler } from 'react-native'


class FriendsPlayersScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
          avatar1: this.props.avatar1,
          avatar2: this.props.avatar2,
          avatar3: this.props.avatar3,
          avatar4: this.props.avatar4,
          avatar5: this.props.avatar5
        }
        // this.setState est appelé dans un callback dans showImagePicker, pensez donc bien à binder la fonction _avatarClicked
        this.changePhoto = this.changePhoto.bind(this)
    }

    componentDidMount() {
    alert(
        'Pour quittez la partie, il suffit de cliquer sur la touche retour.',
        [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
        );
       
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
      }

    handleBackPress = () => {
        if(this.props.verif == true){
            this.props.navigation.navigate("Home"); // works best when the goBack is async
            return true;
        }else{
            this.props.navigation.navigate("Choose"); // works best when the goBack is async
            return true;  
        }
      }

    changePseudo1(pseudo){
        console.log(pseudo)
        const actionPseudo = { type: "MUTATION_PSEUDO1", value: pseudo}
        this.props.dispatch(actionPseudo)
    }
    changePseudo2(pseudo){
        console.log(pseudo)
        const actionPseudo = { type: "MUTATION_PSEUDO2", value: pseudo}
        this.props.dispatch(actionPseudo)
    }
    changePseudo3(pseudo){
        console.log(pseudo)
        const actionPseudo = { type: "MUTATION_PSEUDO3", value: pseudo}
        this.props.dispatch(actionPseudo)
    }
    changePseudo4(pseudo){
        console.log(pseudo)
        const actionPseudo = { type: "MUTATION_PSEUDO4", value: pseudo}
        this.props.dispatch(actionPseudo)
    }
    changePseudo5(pseudo){
        console.log(pseudo)
        const actionPseudo = { type: "MUTATION_PSEUDO5", value: pseudo}
        this.props.dispatch(actionPseudo)
    }
    
    changePhoto(){
        ImagePicker.showImagePicker({}, (response) => {
            if (response.didCancel) {
                console.log('L\'utilisateur a annulé')
            }
            else if (response.error) {
                console.log('Erreur : ', response.error)
            }
            else {
                console.log('Photo : ', response.uri )
                let requireSource = { uri: response.uri }
                // On crée une action avec l'image prise et on l'envoie au store Redux
                const action = { type: `MUTATION_AVATAR${this.props.choosePlayer}`, value: requireSource }
                this.props.dispatch(action)
            }
        })
    }

    render() {


        if(this.props.nbJoueur>3){
            joueur4 =
            <View style={{
                flex: 1, 
                flexDirection: 'row',
                margin:10, 
                marginTop: 10,
                backgroundColor:'rgba(52, 52, 52, 0.6)'
                }}>
                <View style={{
                    flex: 1, 
                    margin:10, 
                    marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:'white'
                }}>
                    <Image
                        source={this.state.avatar4}
                        style={{width: '80%', 
                        height: '80%',
                        justifyContent: "space-around", 
                        margin: 10, 
                        resizeMode: 'contain',
                        padding: 10,
                        backgroundColor:'steelblue'}}
                    />
                </View>
                <View style={{
                    flex: 2
                }}>
                    <View style={{
                        flex: 1, 
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            flex: 1
                        }}>
                            <Text style={{color:"white", fontSize:17, marginTop:10}}>Le pseudo :</Text>
                        </View>
                        <View style={{
                            flex: 1
                        }}> 
                            <TextInput
                                style={{height: 36, width: 80, borderColor: 'white', color: 'white', borderWidth: 1}}
                                onChangeText={(pseudo) => this.changePseudo4(pseudo)}
                                value={this.props.pseudo4}
                            />
                        </View>
                    </View>                        
                </View>
            </View>

        }else{joueur4 =<View></View>}
        if(this.props.nbJoueur>4){
            joueur5 =
            <View style={{
                flex: 1, 
                flexDirection: 'row',
                margin:10, 
                marginTop: 10,
                backgroundColor:'rgba(52, 52, 52, 0.6)'
            }}>
                <View style={{
                    flex: 1, 
                    margin:10, 
                    marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:'white'
                }}>
                    <Image
                        source={this.state.avatar5}
                        style={{width: '80%', 
                        height: '80%',
                        justifyContent: "space-around", 
                        margin: 10, 
                        resizeMode: 'contain',
                        padding: 10,
                        backgroundColor:'steelblue'}}
                    />
                </View>
                <View style={{
                    flex: 2
                }}>
                    <View style={{
                        flex: 1, 
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            flex: 1
                        }}>
                            <Text style={{color:"white", fontSize:17, marginTop:10}}>Le pseudo :</Text>
                        </View>
                        <View style={{
                            flex: 1
                        }}> 
                            <TextInput
                                style={{height: 36, width: 80, borderColor: 'white', color: 'white', borderWidth: 1}}
                                onChangeText={(pseudo) => this.changePseudo5(pseudo)}
                                value={this.props.pseudo5}
                            />
                        </View>
                    </View>                        
                </View>
            </View>
        }else{joueur5 =<View></View>}

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={{
                    flex: 1, 
                    flexDirection: 'row',
                    margin:10, 
                    marginTop: 10,
                    backgroundColor:'rgba(52, 52, 52, 0.6)'
                    }}>
                    <View style={{
                        flex: 1, 
                        margin:10, 
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor:'white'
                    }}>
                        <Image
                            source={this.state.avatar1}
                            style={{width: '80%', 
                            height: '80%',
                            justifyContent: "space-around", 
                            margin: 10, 
                            resizeMode: 'contain',
                            padding: 10,
                            backgroundColor:'steelblue'}}
                        />
                    </View>
                    <View style={{
                        flex: 2
                    }}>
                        <View style={{
                            flex: 1, 
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                flex: 1
                            }}>
                                <Text style={{color:"white", fontSize:17, marginTop:10}}>Le pseudo :</Text>
                            </View>
                            <View style={{
                                flex: 1
                            }}> 
                            <TextInput
                                style={{height: 36, width: 80, borderColor: 'white', color: 'white', borderWidth: 1}}
                                onChangeText={(pseudo) => this.changePseudo1(pseudo)}
                                value={this.props.pseudo1}
                            />
                            </View>
                        </View>                        
                    </View>
                </View>
                <View style={{
                    flex: 1, 
                    flexDirection: 'row',
                    margin:10, 
                    marginTop: 10,
                    backgroundColor:'rgba(52, 52, 52, 0.6)'
                    }}>
                    <View style={{
                        flex: 1, 
                        margin:10, 
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor:'white'
                    }}>
                        <Image
                            source={this.state.avatar2}
                            style={{width: '80%', 
                            height: '80%',
                            justifyContent: "space-around", 
                            margin: 10, 
                            resizeMode: 'contain',
                            padding: 10,
                            backgroundColor:'steelblue'}}
                        />
                    </View>
                    <View style={{
                        flex: 2
                    }}>
                        <View style={{
                            flex: 1, 
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                flex: 1
                            }}>
                                <Text style={{color:"white", fontSize:17, marginTop:10}}>Le pseudo :</Text>
                            </View>
                            <View style={{
                                flex: 1
                            }}> 
                            <TextInput
                                style={{height: 36, width: 80, borderColor: 'white', color: 'white', borderWidth: 1}}
                                onChangeText={(pseudo) => this.changePseudo2(pseudo)}
                                value={this.props.pseudo2}
                            />
                            </View>
                        </View>                        
                    </View>
                </View>
                <View style={{
                    flex: 1, 
                    flexDirection: 'row',
                    margin:10, 
                    marginTop: 10,
                    backgroundColor:'rgba(52, 52, 52, 0.6)'
                    }}>
                    <View style={{
                        flex: 1, 
                        margin:10, 
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor:'white'
                    }}>
                        <Image
                            source={this.state.avatar3}
                            style={{width: '80%', 
                            height: '80%',
                            justifyContent: "space-around", 
                            margin: 10, 
                            resizeMode: 'contain',
                            padding: 10,
                            backgroundColor:'steelblue'}}
                        />
                    </View>
                    <View style={{
                        flex: 2
                    }}>
                        <View style={{
                            flex: 1, 
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                flex: 1
                            }}>
                                <Text style={{color:"white", fontSize:17, marginTop:10}}>Le pseudo :</Text>
                            </View>
                            <View style={{
                                flex: 1
                            }}> 
                            <TextInput
                                style={{height: 36, width: 80, borderColor: 'white', color: 'white', borderWidth: 1}}
                                onChangeText={(pseudo) => this.changePseudo3(pseudo)}
                                value={this.props.pseudo3}
                            />
                            </View>
                        </View>                        
                    </View>
                </View>
                {joueur4}
                {joueur5}

                <Button block info style={{ margin: 20}} onPress={()=>this.props.navigation.navigate("Game")}>
                            <Label style={{
                                color:"white",
                                fontSize: 17}}>Confirmer</Label>
                </Button>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        nbJoueur : state.toogleScore.nbJoueur,
        avatar1 : state.tooglePlayer.avatar1,
        avatar2 : state.tooglePlayer.avatar2,
        avatar3 : state.tooglePlayer.avatar3,
        avatar4 : state.tooglePlayer.avatar4,
        avatar5 : state.tooglePlayer.avatar5,
        pseudo1 : state.tooglePlayer.pseudo1,
        pseudo2 : state.tooglePlayer.pseudo2,
        pseudo3 : state.tooglePlayer.pseudo3,
        pseudo4 : state.tooglePlayer.pseudo4,
        pseudo5 : state.tooglePlayer.pseudo5,
        verif: state.toogleUser.verif,
        choosePlayer : state.tooglePlayer.choosePlayer,
        turns : state.toogleScore.turns

    }
  }
  
  export default connect(mapStateToProps)(FriendsPlayersScreen);