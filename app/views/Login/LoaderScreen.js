import React, {Component} from "react";
import {ActivityIndicator, View} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export default class LoaderScreen extends Component {

    componentDidMount(){
        AsyncStorage.getItem("token").then(token=>{
            if(token){
                console.log(token);
                //if token then authenticated so go to home
                this.props.navigation.navigate("Home");
            } else {
                //no token so go to register screen
                this.props.navigation.navigate("Choose");
            }
        })
    }

    render(){
        return <View>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    }
}