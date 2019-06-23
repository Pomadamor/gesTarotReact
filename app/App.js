import React, {Component} from 'react';
import AppContainer from "./config";
import {ImageBackground} from "react-native"
export default class App extends Component {
  render() {
    return (
      <ImageBackground source={require("./assets/img/fond.png")} style={{width: '100%', height: '100%'}}>
       <AppContainer/>
      </ImageBackground>
    );
  }
}