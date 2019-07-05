import React, { Component } from 'react';
import {View, Text, Image} from 'react-native'
import { Label, Form, Content, Button, Item, Input} from 'native-base';
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'

class FriendsPlayersScreen extends Component {

    if (friendUpdate)

    constructor(props) {
        super(props)
        this.state = {
          avatar: this.props.avatar
        }
        // this.setState est appelé dans un callback dans showImagePicker, pensez donc bien à binder la fonction _avatarClicked
        this.changePhoto = this.changePhoto.bind(this)
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
                const action = { type: "SET_AVATAR", value: requireSource }
                this.props.dispatch(action)
            }
        })
    }

    render() {
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
                            source={this.state.avatar}
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
                        <Text style={{color:"white", fontSize:17, marginTop:10}}>Modifier l'avatar par une :</Text>
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
                                <Button block info style={{margin:2}} onPress={()=>this.handleRegister()}>
                                    <Label style={{
                                        color:"white",
                                        fontSize: 17}}>Image</Label>
                                </Button>
                            </View>
                            <View style={{
                                flex: 1
                            }}> 
                                <Button block info style={{margin:2}} onPress={this.changePhoto()}>
                                    <Label style={{
                                        color:"white",
                                        fontSize: 17}}>Photo</Label>
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{flex: 3, flexDirection: 'row'}}>
                    <Content style={{marginLeft: 16, marginRight: 16}}>
                        <Form style={{
                            backgroundColor: 'rgba(52, 52, 52, 0.6)',
                            color: "white",
                            padding:20}}>
                            <Item floatingLabel>
                            <Label style={{
                                color:"white",
                                fontSize: 17, 
                                fontWeight: 'bold'}}>Email</Label>
                            {/* <Input onChangeText={(useremail) => this.setState({useremail})}
                                value={this.state.useremail}/> */}
                            </Item>
                            <Item floatingLabel last>
                            <Label style={{
                                color:"white",
                                fontSize: 17, 
                                fontWeight: 'bold'}}>Pseudo</Label>
                            <Input />
                            </Item>
                            <Item floatingLabel last>
                            <Label style={{
                                color:"white",
                                fontSize: 17, 
                                fontWeight: 'bold'}}>Password</Label>
                            <Input />
                            </Item>
                            <Item floatingLabel last>
                            <Label style={{
                                color:"white",
                                fontSize: 17, 
                                fontWeight: 'bold'}}>Confirm Password</Label>
                            <Input />
                            </Item>
                            <Button block info style={{ marginTop: 100}} onPress={()=>this.handleRegister()}>
                            <Label style={{
                                color:"white",
                                fontSize: 17}}>Valider</Label>
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
        avatar : state.tooglePlayer.avatar
    }
  }
  
  export default connect(mapStateToProps)(FriendsPlayersScreen);