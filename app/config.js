import {createSwitchNavigator, createAppContainer} from "react-navigation";
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import React from 'react';
import LoaderScreen from "./views/Login/LoaderScreen";
import HomeScreen from "./views/HomeScreen";
import RegisterScreen from "./views/Login/RegisterScreen";
import LoginScreen from "./views/Login/LoginScreen";
import GameScreen from "./views/Game/GameScreen";
import GrillChooseScreen from "./views/Game/GrillChooseScreen";
import GrillScoreScreen from "./views/Game/GrillScoreScreen";
import ChooseScreen from "./views/Login/ChooseScreen";
import AnimationScreen from "./views/Login/AnimationScreen";
import UserScreen from "./views/Menu/UserScreen";
import MenuScreen from "./views/Menu/MenuScreen";
import FriendsPlayersScreen from "./views/friends/FriendsPlayersScreen";
import FriendsScreen from "./views/Menu/Friends/FriendsScreen"
import HistoryScreen from "./views/Menu/History/HistoryScreen"
import HistoryGrillScreen from "./views/Menu/History/HistoryGrillScreen"
import ImageScreen from "./views/Personnalisation/ImageScreen"
import ColorScreen from "./views/Personnalisation/ColorScreen"
import FriendsSaveScreen from "./views/Menu/Friends/FriendsSaveScreen"
import AddFriendScreen from "./views/Menu/Friends/AddFriendScreen"

const switchNavigator = createAnimatedSwitchNavigator({
    Loader: LoaderScreen,
    Animation:AnimationScreen,
    Home: HomeScreen,
    Choose: ChooseScreen,
    Register: RegisterScreen,
    Login: LoginScreen,
    Game: GameScreen,
    GrillChoose: GrillChooseScreen,
    GrillScore: GrillScoreScreen,
    User: UserScreen,
    Menu: MenuScreen,
    FriendsPlayers: FriendsPlayersScreen,
    Friends: FriendsScreen,
    History: HistoryScreen,
    HistoryGrill: HistoryGrillScreen,
    Image: ImageScreen,
    Color: ColorScreen,
    FriendsSave: FriendsSaveScreen,
    AddFriend: AddFriendScreen
},{
    transition: (
        <Transition.Together>
          <Transition.Out
            type="slide-bottom"
            durationMs={400}
            interpolation="easeIn"
          />
          <Transition.In type="fade" durationMs={500} />
        </Transition.Together>
      ),
}, {
    initialRouteName: "Loader"
});

/**
 * Cette page permet de gérer la navigation de l'application avec loader par defaut
 * @param switchNavigator gère la navigation
 */

export default createAppContainer(switchNavigator);