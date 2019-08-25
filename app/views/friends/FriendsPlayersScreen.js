import React, { Component } from 'react';
import { View, Text, Image, TextInput, Alert } from 'react-native'
import { Label, Button } from 'native-base';
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
        this.changePhoto = this.changePhoto.bind(this)
    }

    /**
     * fonction du cycle de vie qui défini l'affichage d'un alert au démarrage de la vue
     */
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

        /**
     * fonction définissant l'appui sur le bouton retour (avec le BackHandler compris dans le componentDidMount et la fonction suivante)
     */
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        if (this.props.verif == true) {
            this.props.navigation.navigate("Home"); // works best when the goBack is async
            return true;
        } else {
            this.props.navigation.navigate("Choose"); // works best when the goBack is async
            return true;
        }
    }

    /**
     * fonction changePseudo permet la modification du pseudo a la saisi de l'input concerné
     */
    changePseudo(pseudo, id) {
        console.log(pseudo)
        const actionPseudo = { type: `MUTATION_PSEUDO${id}`, value: pseudo }
        this.props.dispatch(actionPseudo)
    }
   
    /**
     * fonction changePseudo permet la modification de l'image a la selection de l'image concerné
     * Cette fonction n'est pas encore fonctionnel, elle est une amélioration en cours
     */
    changePhoto() {
        ImagePicker.showImagePicker({}, (response) => {
            if (response.didCancel) {
                console.log('L\'utilisateur a annulé')
            }
            else if (response.error) {
                console.log('Erreur : ', response.error)
            }
            else {
                console.log('Photo : ', response.uri)
                let requireSource = { uri: response.uri }
                const action = { type: `MUTATION_AVATAR${this.props.choosePlayer}`, value: requireSource }
                this.props.dispatch(action)
            }
        })
    }

    /**
     * Ce rendu affiche la grill des joueur, permettant le choix de leur pseudo ainsi que l'aperçu de leur image
     */
    render() {


        if (this.props.nbJoueur > 3) {
            joueur4 =
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 10,
                    marginTop: 10,
                    backgroundColor: 'rgba(52, 52, 52, 0.6)'
                }}>
                    <View style={{
                        flex: 1,
                        margin: 10,
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white'
                    }}>
                        <Image
                            source={this.state.avatar4}
                            style={{
                                width: '80%',
                                height: '80%',
                                justifyContent: "space-around",
                                margin: 10,
                                resizeMode: 'contain',
                                padding: 10,
                                backgroundColor: 'steelblue'
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 2,
                        alignItems: "center",
                        alignContent: 'center' 
                    }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: "center" ,
                            alignContent: 'center'
                        }}>
                            <View style={{
                                flex: 1,
                                alignItems: "center" 
                            }}>
                                <Text style={{ color: "white", fontSize: 17, marginTop: 10 }}>Le pseudo :</Text>
                            </View>
                            <View style={{
                                flex: 1
                            }}>
                                <TextInput
                                    style={{ height: 36, width: 80, borderColor: 'white', color: 'white', borderWidth: 1 }}
                                    onChangeText={(pseudo) => this.changePseudo(pseudo, id=5)}
                                    value={this.props.pseudo}
                                />
                            </View>
                        </View>
                    </View>
                </View>

        } else { joueur4 = <View></View> }
        if (this.props.nbJoueur > 4) {
            joueur5 =
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 10,
                    marginTop: 10,
                    backgroundColor: 'rgba(52, 52, 52, 0.6)'
                }}>
                    <View style={{
                        flex: 1,
                        margin: 10,
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white'
                    }}>
                        <Image
                            source={this.state.avatar5}
                            style={{
                                width: '80%',
                                height: '80%',
                                justifyContent: "space-around",
                                margin: 10,
                                resizeMode: 'contain',
                                padding: 10,
                                backgroundColor: 'steelblue'
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 2
                    }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: "center" ,
                            alignContent: 'center'
                        }}>
                            <View style={{
                                flex: 1
                            }}>
                                <Text style={{ color: "white", fontSize: 17, marginTop: 10 }}>Le pseudo :</Text>
                            </View>
                            <View style={{
                                flex: 1
                            }}>
                                <TextInput
                                    style={{ height: 36, width: 80, borderColor: 'white', color: 'white', borderWidth: 1 }}
                                    onChangeText={(pseudo) => this.changePseudo(pseudo, id = 5)}
                                    value={this.props.pseudo}
                                />
                            </View>
                        </View>
                    </View>
                </View>
        } else { joueur5 = <View></View> }

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 10,
                    marginTop: 10,
                    backgroundColor: 'rgba(52, 52, 52, 0.6)'
                }}>
                    <View style={{
                        flex: 1,
                        margin: 10,
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white'
                    }}>
                        <Image
                            source={this.state.avatar1}
                            style={{
                                width: '80%',
                                height: '80%',
                                justifyContent: "space-around",
                                margin: 10,
                                resizeMode: 'contain',
                                padding: 10,
                                backgroundColor: 'steelblue'
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 2
                    }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: "center" ,
                            alignContent: 'center'
                        }}>
                            <View style={{
                                flex: 1
                            }}>
                                <Text style={{ color: "white", fontSize: 17, marginTop: 10 }}>Le pseudo :</Text>
                            </View>
                            <View style={{
                                flex: 1
                            }}>
                                <TextInput
                                    style={{ height: 36, width: 80, borderColor: 'white', color: 'white', borderWidth: 1 }}
                                    onChangeText={(pseudo) => this.changePseudo(pseudo, id = 1)}
                                    value={this.props.pseudo}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 10,
                    marginTop: 10,
                    backgroundColor: 'rgba(52, 52, 52, 0.6)'
                }}>
                    <View style={{
                        flex: 1,
                        margin: 10,
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white'
                    }}>
                        <Image
                            source={this.state.avatar2}
                            style={{
                                width: '80%',
                                height: '80%',
                                justifyContent: "space-around",
                                margin: 10,
                                resizeMode: 'contain',
                                padding: 10,
                                backgroundColor: 'steelblue'
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 2
                    }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: "center" ,
                            alignContent: 'center'
                        }}>
                            <View style={{
                                flex: 1
                            }}>
                                <Text style={{ color: "white", fontSize: 17, marginTop: 10 }}>Le pseudo :</Text>
                            </View>
                            <View style={{
                                flex: 1
                            }}>
                                <TextInput
                                    style={{ height: 36, width: 80, borderColor: 'white', color: 'white', borderWidth: 1 }}
                                    onChangeText={(pseudo) => this.changePseudo(pseudo, id=2)}
                                    value={this.props.pseudo}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 10,
                    marginTop: 10,
                    backgroundColor: 'rgba(52, 52, 52, 0.6)'
                }}>
                    <View style={{
                        flex: 1,
                        margin: 10,
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white'
                    }}>
                        <Image
                            source={this.state.avatar3}
                            style={{
                                width: '80%',
                                height: '80%',
                                justifyContent: "space-around",
                                margin: 10,
                                resizeMode: 'contain',
                                padding: 10,
                                backgroundColor: 'steelblue'
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 2
                    }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: "center" ,
                            alignContent: 'center'
                        }}>
                            <View style={{
                                flex: 1
                            }}>
                                <Text style={{ color: "white", fontSize: 17, marginTop: 10 }}>Le pseudo :</Text>
                            </View>
                            <View style={{
                                flex: 1
                            }}>
                                <TextInput
                                    style={{ height: 36, width: 80, borderColor: 'white', color: 'white', borderWidth: 1 }}
                                    onChangeText={(pseudo) => this.changePseudo(pseudo, id=3)}
                                    value={this.props.pseudo}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                {joueur4}
                {joueur5}

                <Button block info style={{ margin: 20 }} onPress={() => this.props.navigation.navigate("Game")}>
                    <Label style={{
                        color: "white",
                        fontSize: 17
                    }}>Confirmer</Label>
                </Button>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        nbJoueur: state.toogleScore.nbJoueur,
        avatar1: state.tooglePlayer.avatar1,
        avatar2: state.tooglePlayer.avatar2,
        avatar3: state.tooglePlayer.avatar3,
        avatar4: state.tooglePlayer.avatar4,
        avatar5: state.tooglePlayer.avatar5,
        pseudo1: state.tooglePlayer.pseudo1,
        pseudo2: state.tooglePlayer.pseudo2,
        pseudo3: state.tooglePlayer.pseudo3,
        pseudo4: state.tooglePlayer.pseudo4,
        pseudo5: state.tooglePlayer.pseudo5,
        verif: state.toogleUser.verif,
        choosePlayer: state.tooglePlayer.choosePlayer,
        turns: state.toogleScore.turns

    }
}

export default connect(mapStateToProps)(FriendsPlayersScreen);