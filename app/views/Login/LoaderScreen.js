import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";


/**
 * Component permet de gérer ce qui se passe a l'arriver sur ce fichier puis rediriger vers le bon endroit
 */
export default class LoaderScreen extends Component {

    componentDidMount() {
        AsyncStorage.getItem("token").then(token => {
            if (token) {
                console.log(token, "la")
                //if token then authenticated so go to home
                this.props.navigation.navigate("Home");
            } else {
                console.log(AsyncStorage.getItem("token"), "la")
                console.log("la", token)
                //no token so go to register screen
                this.props.navigation.navigate("Choose");
            }
        })
    }

       /**
 * Ce rendu affiche une icon de chargement le temps que la redirection se fasse
 */
    render() {
        return <View>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    }
}