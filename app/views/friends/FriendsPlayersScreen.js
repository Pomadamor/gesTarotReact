import React, { Component } from 'react';
import { View, Text, Image, TextInput, Alert } from 'react-native'
import { Label, Form, Content, Button } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'
import { BackHandler } from 'react-native'

/**
 * Component général permet d'afficher la vue du choix des joueurs avant de démarrer une partie ( ou de modifier les joueurs pendant la partie ).
 */


class FriendsPlayersScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            choix2: '',
            choix3: '',
            choix4: false,
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

    /**
     * Fonction handleBackPress : si retour en arriere supressions du nombre de joueur et retour à la vue principale
    */


    handleBackPress = () => {
        if (this.props.verif == true) {
            const action = { type: "MUTATION_NBJOUEURS", value: 0 }
            this.props.dispatch(action)
            this.props.navigation.navigate("Home"); // works best when the goBack is async
            return true;
        } else {
            const action = { type: "MUTATION_NBJOUEURS", value: 0 }
            this.props.dispatch(action)
            this.props.navigation.navigate("Choose"); // works best when the goBack is async
            return true;
        }
    }


     /**
     * Fonction changePseudo permet la modification du pseudo a la saisi de l'input concerné
     *
     * @param {string} pseudo
     * @param {string} id
     * @public
     */

    changePseudo(pseudo, id) {
        console.log("name pseudo", pseudo.id)
        console.log("name pseudo", this.props.pseudo2.username)
        console.log("name pseudo", this.props.pseudo3.username)
        console.log("name pseudo", this.props.pseudo4.username)
        console.log("name pseudo", this.props.pseudo5.username)


        if(typeof pseudo == 'string' || pseudo instanceof String){
            console.log("cest une string", pseudo)

            const actionPseudo = { type: `MUTATION_PSEUDO${id}`, value: {username : pseudo} }
            this.props.dispatch(actionPseudo)

        }else{
            if(this.props.pseudo2 == pseudo ||
                this.props.pseudo3 == pseudo ||
                this.props.pseudo4 == pseudo ||
                this.props.pseudo5 == pseudo 
                ){
                    alert("Vous ne pouvez pas ajouter deux fois le même ami.")
                }else{
                    const actionPseudo = { type: `MUTATION_PSEUDO${id}`, value: pseudo }
                    const actionId = { type: `MUTATION_ID${id}`, value: id }

                    this.props.dispatch(actionPseudo)
                    this.props.dispatch(actionId)

                }
        }
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
     * Ce rendu affiche la grill des joueurs, permettant le choix de leur pseudo ainsi que l'aperçu de leurs images
    * @param {string} pseudo 
    * @param {string} color 
    * @param {string} avatar 
    * @param {string} pseudo2
    * @param {string} color2
    * @param {string} avatar2 
    * @param {string} pseudo3
    * @param {string} color3
    * @param {string} avatar3
    * @param {string} pseudo4
    * @param {string} color4
    * @param {string} avatar4
    * @param {string} pseudo5
    * @param {string} color5
    * @param {string} avatar5
    * @param {string} nbJoueur
    * @param {string} friends
    */

    render() {

       
        var player = []
        console.log("test erreur friends", this.props.friends.length)
        if(this.props.friends.length > 0){
            console.log("test ca passe la")

            i = 0
            while ( i < this.props.friends.length ){
                player.push({ label: this.props.friends[i].username, value: this.props.friends[i], color: "powderblue"})
                i++
            }
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
                            width: 200
                        }}>
                            <Text
                            style={{
                                alignItems:"center",
                                fontSize: 17,
                                color: "white"
                            }}>Joueur 4</Text>
                        
                            <View>
                                { this.state.choix4  == true
                                ? 
                                <RNPickerSelect
                                    placeholder={{
                                        label: 'Selectionner',
                                        pseudo: null,
                                    }}
                                    onValueChange={(pseudo) => this.changePseudo(pseudo, id=4)}
                                    items={player}
                                />
                                :
                                <View style={{flexDirection: 'row',}}>
                                <Image
                                    source={require("../../assets/img/edit.png")} style={{ height: 15, width:15, marginTop: 5, tintColor: "#FFFFFF" }} />  
                                
                                    <TextInput
                                        style = {this.state.choix4 == false ? 
                                        {
                                            height: 36, textDecorationLine: 'underline', textDecorationLine: 'underline', fontWeight: 'bold', width: 80, borderColor: 'white', color: 'white', textTransform: 'lowercase'
                                        }:
                                        {display:'none'}}
                                        maxLength={6}
                                        onChangeText={(pseudo) => this.changePseudo(pseudo, id=4)}
                                        value={this.props.pseudo4.username}
                                    />
                                </View>
                                }   
                            </View>
                        </View>
                        <Button transparent
                        style={{ marginTop: 12, position: "absolute", right:10}}
                        onPress={() => Alert.alert(
                            'Attention',
                            "Personnaliser le joueur.",
                            [
                                {
                                text: 'Choisir un pseudo',
                                onPress: () => this.setState({ choix4: false})
                                },
                                {
                                text: 'Selectionner un ami',
                                onPress: () => this.setState({ choix4: true})
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
                    
                    <View>
                        { this.state.choix5  == true
                        ? 
                        <RNPickerSelect
                            placeholder={{
                                label: 'Selectionner',
                                pseudo: null,
                            }}
                            onValueChange={(pseudo) => this.changePseudo(pseudo, id=5)}
                            items={player}
                        />
                        :
                        <View style={{flexDirection: 'row',}}>
                                <Image
                                    source={require("../../assets/img/edit.png")} style={{ height: 15, width:15, marginTop: 5, tintColor: "#FFFFFF" }} />  
                                
                        <TextInput
                            style = {{
                                height: 36,
                                textDecorationLine: 'underline', 
                                fontWeight: 'bold',
                                width: 80, 
                                borderColor: 'white', 
                                color: 'white'
                            }}
                            maxLength={6}
                            onChangeText={(pseudo) => this.changePseudo(pseudo, id=5)}
                            value={this.props.pseudo5.username}
                        />
                        </View>
                        }   
                    </View>
                    </View>
                    <Button transparent
                    style={{ marginTop: 12, position: "absolute", right:10}}
                    onPress={() => Alert.alert(
                        'Attention',
                        "Personnaliser le joueur.",
                        [
                            {
                            text: 'Choisir un pseudo',
                            onPress: () => this.setState({ choix5: false})
                            },
                            {
                            text: 'Selectionner un ami',
                            onPress: () => this.setState({ choix5: true})
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
                                width: 200
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
                                width: 200
                            }}>
                                <Text
                                style={{
                                    alignItems:"center",
                                    fontSize: 17,
                                    color: "white"
                                }}>Joueur 2</Text>

                                <View>
                                    { this.state.choix2  == true
                                    ? 
                                    <RNPickerSelect
                                        placeholder={{
                                            label: 'Selectionner',
                                            pseudo: null,
                                        }}
                                        onValueChange={(pseudo) => this.changePseudo(pseudo, id=2)}
                                        items={player}
                                    />
                                    :<View style={{flexDirection: 'row',}}>
                                    <Image
                                        source={require("../../assets/img/edit.png")} style={{ height: 15, width:15, marginTop: 5, tintColor: "#FFFFFF" }} />  
                                    <TextInput
                                        style = {{
                                            height: 36, 
                                            textDecorationLine: 'underline',
                                            fontWeight: 'bold', 
                                            width: 80, 
                                            borderColor: 'white', 
                                            color: 'white'
                                        }}
                                        maxLength={6}
                                        onChangeText={(pseudo) => this.changePseudo(pseudo, id=2)}
                                        value={this.props.pseudo2.username}
                                    />
                                    </View>
                                    }   
                                </View>
                            </View>
                            <Button transparent
                            style={{ marginTop: 12, position: "absolute", right:10}}
                            onPress={() => Alert.alert(
                                'Attention',
                                "Personnaliser le joueur.",
                                [
                                    {
                                    text: 'Choisir un pseudo',
                                    onPress: () => this.setState({ choix2: false})
                                    },
                                    {
                                    text: 'Selectionner un ami',
                                    onPress: () => this.setState({ choix2: true})
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
                                width: 200
                            }}>
                                <Text
                                style={{
                                    alignItems:"center",
                                    fontSize: 17,
                                    color: "white"
                                }}>Joueur 3</Text>
                                <View>
                                { this.state.choix3  == true
                                ? 
                                <RNPickerSelect
                                    placeholder={{
                                        label: 'Selectionner',
                                        pseudo: null,
                                    }}
                                    onValueChange={(pseudo) => this.changePseudo(pseudo, id=3)}
                                    items={player}
                                />
                                :
                                <View style={{flexDirection: 'row',}}>
                                <Image
                                    source={require("../../assets/img/edit.png")} style={{ height: 15, width:15, marginTop: 5, tintColor: "#FFFFFF" }} />  
                                <TextInput
                                    style = {this.state.choix3 == false ? 
                                    {
                                        height: 36, textDecorationLine: 'underline', fontWeight: 'bold', width: 80, borderColor: 'white', color: 'white'
                                    }:
                                    {display:'none'}}
                                    maxLength={6}
                                    onChangeText={(pseudo) => this.changePseudo(pseudo, id=3)}
                                    value={this.props.pseudo3.username}
                                /></View>
                                }   
                            </View>
                        </View>
                        <Button transparent
                        style={{ marginTop: 12, position: "absolute", right:10}}
                        onPress={() => Alert.alert(
                            'Attention',
                            "Personnaliser le joueur.",
                            [
                                {
                                text: 'Choisir un pseudo',
                                onPress: () => this.setState({ choix3: false})
                                },
                                {
                                text: 'Selectionner un ami',
                                onPress: () => this.setState({ choix3: true})
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
        id2: state.tooglePlayer.id2,
        id3: state.tooglePlayer.id3,
        id4: state.tooglePlayer.id4,
        id5: state.tooglePlayer.id5,
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