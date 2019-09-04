import React from 'react';
import AppContainer from "./config";
import {ImageBackground} from "react-native"
import { Provider } from 'react-redux'
import Store from "./store/configStore"
import SplashScreen from "react-native-splash-screen"

/**
 * Ce fichier permet de gérer la vue centrale de l'application.
 * @version 0.1
 * @author Ines
 */


export default class App extends React.Component{
  componentDidMount(){
    SplashScreen.hide()
  }

  render() {
    return <Provider store={Store}>
      <ImageBackground source={require("./assets/img/fond.png")} style={{width: '100%', height: '100%'}}>
       <AppContainer/>
      </ImageBackground>
    </Provider>;
  }
}