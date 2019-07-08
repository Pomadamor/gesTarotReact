import React, {Component} from "react";
import {Button, Text, TextInput, View} from "react-native";
import apiRoutes from "../../routes/api-routes";
import AsyncStorage from "@react-native-community/async-storage";

export default class RegisterScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            error: ""
        }
    }

    async handleRegister() {
        const {username} = this.state;
        const {method, url} = apiRoutes.register;
        try {
            const res = await fetch(url, {
                method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({username})
            });
            if(res.ok){
                const {token} = await res.json();
                await AsyncStorage.setItem("token", token);
                this.props.navigation.navigate("Loader");
            } else {
                const {message} = await res.json();
                this.setState({ error: message });
            }
        } catch(e){
            (e);
        }

    }



    render(){
        const {error} = this.state;
        return <View>
            <Text>{error}</Text>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
            />
            <Button
                onPress={()=>this.handleRegister()}
                title="Register"
            />
        </View>
    }
}