import React, { Component } from 'react';
import { View, Text, Image, TextInput, Alert } from 'react-native'
import { Label, Form, Content, Button } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'
import { BackHandler } from 'react-native'


class FriendsPlayersScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            choix2: '',
            choix3: '',
            choix4: '',
            choix5: '',
            avatar: this.props.avatar,
            image: this.props.image,
            color: this.props.color,
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

    choisirPseudo(nb){}

    /**
     * Ce rendu affiche la grill des joueur, permettant le choix de leur pseudo ainsi que l'aperçu de leur image
     */
    render() {

        i = 0
        var player = []
        while ( i < this.props.friends[0].length ){
            player.push({ label: this.props.friends[0][i].username, value: this.props.friends[0][i], color:"powderblue"})
            i++
        }

        if (this.props.nbJoueur > 3) {
            joueur4 =
                <View>
                        <View
                            style={{
                            flex: 2,
                            height: 70,
                            flexDirection: 'row',
                            backgroundColor: 'rgba(52, 52, 52, 0.6)',
                            borderWidth: 0.5,
                            borderColor: '#d6d7da',
                        }}
                        >
                            <Button 
                            style={{ marginTop: 12}}
                            >
                                <Image
                                onPress={() => this.props.navigation.navigate("Image")}
                                source={this.props.avatar4} style={{ height: 70, backgroundColor:this.props.color4, width: 60 }} />  
                            </Button>
                            <View style={{
                                margin: 10,
                                fontSize: 17,
                                height: 100,
                                width: 100
                            }}>
                                <Text
                                style={{
                                    alignItems:"center",
                                    fontSize: 17,
                                    color: "white"
                                }}>Joueur 4</Text>
                                
                                  <Text 
                                    style = {this.state.choix4 == '' ? 
                                    {
                                        alignItems:"center",
                                        color: "white"
                                    }:
                                    {display:'none'}}
                                    >Nom : Joueur 4</Text>  
                                <View>
                                    <TextInput
                                        style = {this.state.choix4 == 'choosePseudo4' ? 
                                        {
                                            height: 36, fontWeight: 'bold', width: 80, borderColor: 'white', color: 'white'
                                        }:
                                        {display:'none'}}
                                        onChangeText={(pseudo) => this.changePseudo(pseudo, id=4)}
                                        value={this.props.pseudo5}
                                    />
                                </View>
                                
                                <View>
                                    { this.state.choix4
                                    ? 
                                    <RNPickerSelect
                                        placeholder={{
                                            label: 'Selectionner',
                                            value: null,
                                        }}
                                        style = {this.state.choix4 == 'chooseAmi4' ? 
                                        {}:{display:'none'}}
                                        onValueChange={(value) => console.log(value)}
                                        items={player}
                                    />
                                    :<View/>
                                    }   
                                </View>
                            </View>
                            <Button transparent
                            style={{ marginTop: 12, position: "absolute", right:10}}
                            onPress={() => Alert.alert(
                                'Attention',
                                "Personnalisé le joueur.",
                                [
                                    {
                                    text: 'Choisir un pseudo',
                                    onPress: () => this.setState({ choix4: "choosePseudo4"})
                                    },
                                    {
                                    text: 'Selectionner un ami',
                                    onPress: () => this.setState({ choix4: "chooseAmi4"})
                                    }
                                ],
                                { cancelable: true },
                                )}
                            >
                                <Image
                                source={require("../../assets/img/edit.png")} style={{ height: 25, width:25, tintColor: "#FFFFFF" }} />  
                            </Button>
                        </View>
                </View>
        } else { joueur4 = <View></View> }
        if (this.props.nbJoueur > 4) {
            joueur5 =
            <View>
            <View
                style={{
                flex: 2,
                height: 70,
                flexDirection: 'row',
                backgroundColor: 'rgba(52, 52, 52, 0.6)',
                borderWidth: 0.5,
                borderColor: '#d6d7da',
            }}
            >
                <Button 
                style={{ marginTop: 12}}
                >
                    <Image
                    onPress={() => this.props.navigation.navigate("Image")}
                    source={this.props.avatar5} style={{ height: 70, backgroundColor:this.props.color5, width: 60 }} />  
                </Button>
                <View style={{
                    margin: 10,
                    fontSize: 17,
                    height: 100,
                    width: 200
                }}>
                    <Text
                    style={{
                        alignItems:"center",
                        fontSize: 17,
                        color: "white"
                    }}>Joueur 5</Text>
                    
                    <Text 
                    style = {this.state.choix5 == '' ? 
                    {
                        alignItems:"center",
                        color: "white"
                    }:
                    {display:'none'}}
                    >Nom : Joueur 5</Text>  

                    <TextInput
                        style = {this.state.choix5 == 'choosePseudo5' ? 
                        {
                            height: 36, fontWeight: 'bold', width: 80, borderColor: 'white', color: 'white'
                        }:
                        {display:'none'}}
                        onChangeText={(pseudo) => this.changePseudo(pseudo, id=5)}
                        value={this.props.pseudo5}
                    />
                    
                    <View>
                        { this.state.choix5 
                        ? 
                        <RNPickerSelect
                            placeholder={{
                                label: 'Selectionner',
                                value: null,
                            }}
                            style = {this.state.choix5 == 'chooseAmi5' ? 
                            {}:{display:'none'}}
                            onValueChange={(value) => console.log(value)}
                            items={player}
                        />
                        :<View/>
                        }   
                    </View>
                </View>
                <Button transparent
                style={{ marginTop: 12, position: "absolute", right:10}}
                onPress={() => Alert.alert(
                    'Attention',
                    "Personnalisé le joueur 5.",
                    [
                        {
                        text: 'Choisir un pseudo',
                        onPress: () => this.setState({ choix5: "choosePseudo5"})
                        },
                        {
                        text: 'Selectionner un ami',
                        onPress: () => this.setState({ choix5: "chooseAmi5"})
                        }
                    ],
                    { cancelable: true },
                    )}
                >
                    <Image
                    source={require("../../assets/img/edit.png")} style={{ height: 25, width:25, tintColor: "#FFFFFF" }} />  
                </Button>
            </View>
    </View>

        } else { joueur5 = <View></View> }

        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Content style={{ margin: 20 }}>
                    <Form>
                        <View
                            style={{
                            flex: 2,
                            height: 70,
                            flexDirection: 'row',
                            backgroundColor: 'rgba(52, 52, 52, 0.6)',
                            borderWidth: 0.5,
                            borderColor: '#d6d7da',
                        }}
                        >
                            <Image
                                onPress={() => this.props.navigation.navigate("User")}
                                source={this.props.avatar} style={{ height: 70, backgroundColor:this.props.color, width: 60}} />
                            <View style={{
                                margin: 10,
                                fontSize: 17,
                                height: 100,
                                width: 100
                            }}>
                                <Text
                                style={{
                                    alignItems:"center",
                                    fontSize: 17,
                                    color: "white"
                                }}>Joueur 1</Text>
                                <Text
                                style={{
                                    alignItems:"center",
                                    fontSize: 17,
                                    color: "white",
                                    fontWeight: 'bold'
                                }}>{this.props.pseudo}</Text>
                            </View>
                        </View>
                        <View
                            style={{
                            flex: 2,
                            height: 70,
                            flexDirection: 'row',
                            backgroundColor: 'rgba(52, 52, 52, 0.6)',
                            borderWidth: 0.5,
                            borderColor: '#d6d7da',
                        }}
                        >
                            <Button 
                            style={{ marginTop: 12}}
                        //mettre en place la modification de l'image pour ce user
                            >
                                <Image
                                onPress={() => this.props.navigation.navigate("User")}
                                source={this.props.avatar2} style={{ height: 70, backgroundColor:this.props.color2, width: 60 }} />  
                            </Button>
                            <View style={{
                                margin: 10,
                                fontSize: 17,
                                height: 100,
                                width: 100
                            }}>
                                <Text
                                style={{
                                    alignItems:"center",
                                    fontSize: 17,
                                    color: "white"
                                }}>Joueur 2</Text>
                                <Text 
                                    style = {this.state.choix2 == '' ? 
                                    {
                                        alignItems:"center",
                                        color: "white"
                                    }:
                                    {display:'none'}}
                                    >Nom : Joueur 2</Text>  
                                <View>
                                    <TextInput
                                        style = {this.state.choix2 == 'choosePseudo2' ? 
                                        {
                                            height: 36, fontWeight: 'bold', width: 80, borderColor: 'white', color: 'white'
                                        }:
                                        {display:'none'}}
                                        onChangeText={(pseudo) => this.changePseudo(pseudo, id=2)}
                                        value={this.props.pseudo2}
                                    />
                                </View>
                                
                                <View>
                                    { this.state.choix2
                                    ? 
                                    <RNPickerSelect
                                        placeholder={{
                                            label: 'Selectionner',
                                            value: null,
                                        }}
                                        style = {this.state.choix2 == 'chooseAmi2' ? 
                                        {}:{display:'none'}}
                                        onValueChange={(value) => console.log(value)}
                                        items={player}
                                    />
                                    :<View/>
                                    }   
                                </View>
                            </View>
                            <Button transparent
                            style={{ marginTop: 12, position: "absolute", right:10}}
                            onPress={() => Alert.alert(
                                'Attention',
                                "Personnalisé le joueur.",
                                [
                                    {
                                    text: 'Choisir un pseudo',
                                    onPress: () => this.setState({ choix2: "choosePseudo2"})
                                    },
                                    {
                                    text: 'Selectionner un ami',
                                    onPress: () => this.setState({ choix2: "chooseAmi2"})
                                    }
                                ],
                                { cancelable: true },
                                )}
                            >


                                <Image
                                source={require("../../assets/img/edit.png")} style={{ height: 25, width:25, tintColor: "#FFFFFF" }} />  
                            </Button>
                        </View>
                        <View
                            style={{
                            flex: 2,
                            height: 70,
                            flexDirection: 'row',
                            backgroundColor: 'rgba(52, 52, 52, 0.6)',
                            borderWidth: 0.5,
                            borderColor: '#d6d7da',
                        }}
                        >
                            <Button 
                            style={{ marginTop: 12}}
                            >
                                <Image
                                onPress={() => this.props.navigation.navigate("User")}
                                source={this.props.avatar3} style={{ height: 70, backgroundColor:this.props.color3, width: 60 }} />  
                            </Button>
                            <View style={{
                                margin: 10,
                                fontSize: 17,
                                height: 100,
                                width: 100
                            }}>
                                <Text
                                style={{
                                    alignItems:"center",
                                    fontSize: 17,
                                    color: "white"
                                }}>Joueur 3</Text>
                                <Text 
                                    style = {this.state.choix3 == '' ? 
                                    {
                                        alignItems:"center",
                                        color: "white"
                                    }:
                                    {display:'none'}}
                                    >Nom : Joueur 3</Text>  
                                <View>
                                    <TextInput
                                        style = {this.state.choix3 == 'choosePseudo3' ? 
                                        {
                                            height: 36, fontWeight: 'bold', width: 80, borderColor: 'white', color: 'white'
                                        }:
                                        {display:'none'}}
                                        onChangeText={(pseudo) => this.changePseudo(pseudo, id=3)}
                                        value={this.props.pseudo5}
                                    />
                                </View>
                                
                                <View>
                                    { this.state.choix3 
                                    ? 
                                    <RNPickerSelect
                                        placeholder={{
                                            label: 'Selectionner',
                                            value: null,
                                        }}
                                        style = {this.state.choix3 == 'chooseAmi3' ? 
                                        {}:{display:'none'}}
                                        onValueChange={(value) => console.log(value)}
                                        items={player}
                                    />
                                    :<View/>
                                    }   
                                </View>
                            </View>
                            <Button transparent
                            style={{ marginTop: 12, position: "absolute", right:10}}
                            onPress={() => Alert.alert(
                                'Attention',
                                "Personnalisé le joueur.",
                                [
                                    {
                                    text: 'Choisir un pseudo',
                                    onPress: () => this.setState({ choix3: "choosePseudo3"})
                                    },
                                    {
                                    text: 'Selectionner un ami',
                                    onPress: () => this.setState({ choix3: "chooseAmi3"})
                                    }
                                ],
                                { cancelable: true },
                                )}
                            >
                                <Image
                                source={require("../../assets/img/edit.png")} style={{ height: 25, width:25, tintColor: "#FFFFFF" }} />  
                            </Button>
                        </View>

                        {joueur4}
                        {joueur5}

                     <Button block info style={{ margin: 20 }} onPress={() => this.props.navigation.navigate("Game")}>
                     <Label style={{
                        color: "white",
                        fontSize: 17
                    }}>Confirmer</Label>
                </Button>
                </Form>
            </Content>
        </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.toogleFriends.friends,
        nbJoueur: state.toogleScore.nbJoueur,
        avatar: state.toogleUser.avatar,
        avatar2: state.tooglePlayer.avatar2,
        avatar3: state.tooglePlayer.avatar3,
        avatar4: state.tooglePlayer.avatar4,
        avatar5: state.tooglePlayer.avatar5,
        pseudo2: state.tooglePlayer.pseudo2,
        pseudo3: state.tooglePlayer.pseudo3,
        pseudo4: state.tooglePlayer.pseudo4,
        pseudo5: state.tooglePlayer.pseudo5,
        color2: state.tooglePlayer.color2,
        color3: state.tooglePlayer.color3,
        color4: state.tooglePlayer.color4,
        color5: state.tooglePlayer.color5,
        image: state.toogleUser.image,
        pseudo: state.toogleUser.pseudo,
        color: state.toogleUser.color,
        verif: state.toogleUser.verif,
        choosePlayer: state.tooglePlayer.choosePlayer,
        turns: state.toogleScore.turns

    }
}

export default connect(mapStateToProps)(FriendsPlayersScreen);