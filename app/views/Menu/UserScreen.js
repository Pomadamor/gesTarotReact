import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { checkMail, Verifier_Numero_Telephone } from "../../service/VerifInput"
import { Label, Form, Content, Button, Item, Input } from 'native-base';
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux';
import { BackHandler } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";


class UserScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            image: this.props.image,
            avatar: this.props.avatar,
            color: this.props.color,
            token: this.props.token,
            username: this.props.pseudo,
            phone: this.props.phone,
            email: this.props.email,
            password: "",
            password2: "",
            error: ""
        }
        this.changePhoto = this.changePhoto.bind(this)
    }

    /**
* Les trois fonctions suivante permette de gérer le retour du clavier
*/

    componentDidMount() {
        console.log("this.props.id", this.props.id)
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.navigate("Home");
        return true;
    }

        /**
    * fonction asynchron qui gere la modification du compte
    */

    async update(){

            const username = this.state.username;
            const phone = this.state.phone
            const email = this.state.email;
            const password = this.state.password;
            const token = this.props.token
        
            if (password != this.state.password2) {
              alert(
                'Veuillez saisir deux mots de passe identique.',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
              );
            }
            if (Verifier_Numero_Telephone(phone) == false) {
              alert('Le numero de téléphone est incorrect!');
            }
            if (checkMail(email) == false) {
              alert("L'adresse email saisit est incorrect!");
            }
            else {
                if (password != ""){
                    try {
                        const res = await fetch('https://gestarot-api.lerna.eu/api/logged_user', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            'api-token':token
                        },
                        body: JSON.stringify({
                            "username": username,
                            "email": email,
                            "phone": phone,
                            "password":password
                        })
                    });
                    if (res.ok) {
                        console.log("RESPONSE TRUE", res)
                
                        const actionPhone = { type: "MUTATION_PHONE", value: phone }
                        const actionEmail = { type: "MUTATION_EMAIL", value: email }
                        const actionLogin = { type: "MUTATION_PSEUDO", value: username }
                
                        this.props.dispatch(actionLogin)
                        this.props.dispatch(actionEmail)
                        this.props.dispatch(actionPhone)
                        
                    } else {
                        console.log("RESPONSE FALSE", res.error)
                        alert("Le numéro de téléphone ou l'email existe déjà.");
                    }
                } catch (e) {
                console.log(e);
                }
                }else{
                    try {
                        const res = await fetch('https://gestarot-api.lerna.eu/api/logged_user', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            'api-token':token
                        },
                        body: JSON.stringify({
                            "username": username,
                            "email": email,
                            "phone": phone,
                        })
                    });      
                    if (res.ok) {
                        console.log("RESPONSE TRUE", res)
                
                        const actionPhone = { type: "MUTATION_PHONE", value: phone }
                        const actionEmail = { type: "MUTATION_EMAIL", value: email }
                        const actionLogin = { type: "MUTATION_PSEUDO", value: username }
                
                        AsyncStorage.setItem("pseudo", username)
                        
                        this.props.dispatch(actionLogin)
                        this.props.dispatch(actionEmail)
                        this.props.dispatch(actionPhone)
                        
                    } else {
                        console.log("RESPONSE FALSE", res.error)
                        alert("Le numéro de téléphone ou l'email existe déjà.");
                    }
                } catch (e) {
                console.log(e);
                }            
            }
        }
    }

        /**
    * fonction qui permet de modifier l'image du user par une photo
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
                AsyncStorage.setItem("avatar", requireSource)
                const action = { type: "MUTATION_AVATAR", value: requireSource }
                this.props.dispatch(action)
                this.setState({ avatar: requireSource })
            }
        })
    }
            /**
    * rendu qui gere l'affichage du detail du compte
    * La zone commenté dans le code correspond a des amélioration en cour
    */

    render() {
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
                        backgroundColor:this.state.color
                    }}>
                        <Image
                            source={this.state.avatar}
                            style={{
                                width: '100%',
                                height: '100%',
                                justifyContent: "space-around",
                                // margin: 10,
                                resizeMode: 'contain',
                                // padding: 10,
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 2
                    }}>
                        <Text style={{ color: "white", fontSize: 17, marginTop: 10 }}>Modifier l'avatar par une :</Text>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 10
                        }}>
                            <View style={{
                                flex: 1
                            }}>
                                <Button block info style={{ margin: 2 }} onPress={() => this.changePhoto()}>
                                    <Label style={{
                                        color: "white",
                                        fontSize: 17
                                    }}>Photo</Label>
                                </Button>
                                <Button block info style={{ margin: 2 }} onPress={() => this.props.navigation.navigate("Image")}>
                                    <Label style={{
                                        color: "white",
                                        fontSize: 17
                                    }}>Image</Label>
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 3, flexDirection: 'row' }}>
                    <Content style={{ marginLeft: 16, marginRight: 16 }}>
                        <Form style={{
                            backgroundColor: 'rgba(52, 52, 52, 0.6)',
                            color: "white",
                            padding: 20
                        }}>
                            <Item floatingLabel>
                                <Label style={{
                                    color: "white",
                                    fontSize: 17,
                                }}>Email</Label>
                                <Input 
                                    style={{
                                        color: "white",
                                        fontSize: 17,
                                    }}
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email} />
                            </Item>
                            <Item floatingLabel>
                                <Label style={{
                                        color: "white",
                                        fontSize: 17,
                                    }}>Téléphone</Label>
                                <Input 
                                    style={{
                                        color: "white",
                                        fontSize: 17,
                                    }}
                                    onChangeText={(phone) => this.setState({ phone })}
                                    value={this.state.phone} />
                            </Item>
                            <Item floatingLabel>
                                <Label style={{
                                    color: "white",
                                    fontSize: 17,
                                }}>Pseudo</Label>
                                <Input 
                                    style={{
                                        color: "white",
                                        fontSize: 17,
                                    }}
                                    onChangeText={(username) => this.setState({ username })}
                                    value={this.state.username} />
                            </Item>
                            <Item floatingLabel>
                                <Label style={{
                                    color: "white",
                                    fontSize: 17,
                                }}>Mot de passe</Label>
                                <Input 
                                    style={{
                                        color: "white",
                                        fontSize: 17,
                                    }}
                                
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password })}
                                    value={this.state.password} />
                            </Item>
                            <Item floatingLabel>
                                <Label style={{
                                    color: "white",
                                    fontSize: 17,
                                }}>Confirmation du mot de passe</Label>
                                <Input 
                                    style={{
                                        color: "white",
                                        fontSize: 17,
                                    }}
                                
                                sec ureTextEntry={true}
                                    onChangeText={(password2) => this.setState({ password2 })}
                                    value={this.state.password2} />
                            </Item>
                            <Button block info style={{ marginTop: 50 }} onPress={() => this.update()}>
                                <Label style={{
                                    color: "white",
                                    fontSize: 17
                                }}>Valider</Label>
                            </Button>
                        </Form>
                    </Content>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        avatar: state.toogleUser.avatar,
        image: state.toogleUser.image,
        id: state.toogleUser.id,
        color: state.toogleUser.color,
        pseudo: state.toogleUser.pseudo,
        email: state.toogleUser.email,
        phone: state.toogleUser.phone,
        token: state.toogleUser.token
    }
}

export default connect(mapStateToProps)(UserScreen);