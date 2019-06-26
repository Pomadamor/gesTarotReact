import React, {Component} from 'react';
import AppContainer from "./config";
import {ImageBackground} from "react-native"
import { Provider } from 'react-redux'
import Store from "./store/configStore"

export default class App extends React.Component{
  render() {
    return <Provider store={Store}>
      <ImageBackground source={require("./assets/img/fond.png")} style={{width: '100%', height: '100%'}}>
       <AppContainer/>
      </ImageBackground>
    </Provider>;
  }
}