import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { Label, Form, Content, Button, Item, Input } from 'native-base';
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux';
import { BackHandler } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";

class UserScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            avatar: this.props.avatar,
            color: "blue",
            token: this.props.token,
            username: "",
            // username: this.props.username,
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

    async update() {
        const phone = this.state.phone
        const email = this.state.email;
        const password = this.state.password;

        console.log("TEST2", this.props.id)

        fetch(` https://gestarot-api.lerna.eu/api/user/${this.props.id}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'token': this.state.token
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "phone": phone,
                "password": password
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("TEST1", responseJson)
                const id = { type: "MUTATION_ID", value: responseJson.id }
                const email = { type: "MUTATION_EMAIL", value: responseJson.email }
                const phone = { type: "MUTATION_PHONE", value: responseJson.phone }
                const api_token = { type: "MUTATION_TOKEN", value: responseJson.api_token }
                const actionVerif = { type: "MUTATION_VERIF", value: true }
                this.props.dispatch(actionVerif)
                this.props.dispatch(id)
                this.props.dispatch(email)
                this.props.dispatch(phone)
                this.props.dispatch(api_token)
                console.log(responseJson.api_token)

                const token = responseJson.api_token;
                console.log(token)

                AsyncStorage.setItem("token", token)
                this.props.navigation.navigate("Loader");

                return responseJson;

            })
            .catch((error) => {
                console.error(error);
            });
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
                        backgroundColor: 'white'
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
                                    fontWeight: 'bold'
                                }}>Email</Label>
                                <Input onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email} />
                            </Item>
                            <Item floatingLabel>
                                <Label style={{
                                    color: "white",
                                    fontSize: 17,
                                    fontWeight: 'bold'
                                }}>Phone</Label>
                                <Input onChangeText={(phone) => this.setState({ phone })}
                                    value={this.state.phone} />
                            </Item>
                            <Item floatingLabel last>
                                <Label style={{
                                    color: "white",
                                    fontSize: 17,
                                    fontWeight: 'bold'
                                }}>Pseudo</Label>
                                <Input onChangeText={(username) => this.setState({ username })}
                                    value={this.state.username} />
                            </Item>
                            <Item floatingLabel last>
                                <Label style={{
                                    color: "white",
                                    fontSize: 17,
                                    fontWeight: 'bold'
                                }}>Password</Label>
                                <Input secureTextEntry={true}
                                    onChangeText={(password) => this.setState({ password })}
                                    value={this.state.password} />
                            </Item>
                            <Item floatingLabel last>
                                <Label style={{
                                    color: "white",
                                    fontSize: 17,
                                    fontWeight: 'bold'
                                }}>Confirm Password</Label>
                                <Input secureTextEntry={true}
                                    onChangeText={(password2) => this.setState({ password2 })}
                                    value={this.state.password2} />
                            </Item>
                            <Button block info style={{ marginTop: 100 }} onPress={() => this.update()}>
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
        id: state.toogleUser.id,
        color: state.toogleUser.color,
    }
}

export default connect(mapStateToProps)(UserScreen);