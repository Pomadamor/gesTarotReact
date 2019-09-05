import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export default class LoaderScreen extends Component {

    /**
 * Cette fonction permet de gérer ce qui se passe a l'arriver sur ce fichier puis rediriger vers le bon endroit
 */

    componentDidMount() {
        AsyncStorage.getItem("STORAGE_TOKEN").then(token => {
            if (token) {
                console.log(token)
                //if token then authenticated so go to home
                this.props.navigation.navigate("Home");
            } else {
                console.log(token)

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