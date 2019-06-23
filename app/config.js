import {createSwitchNavigator, createAppContainer} from "react-navigation";
import LoaderScreen from "./views/Login/LoaderScreen";
import HomeScreen from "./views/HomeScreen";
import RegisterScreen from "./views/Login/RegisterScreen";
import LoginScreen from "./views/Login/LoginScreen";
import GameScreen from "./views/GameScreen";
import ChooseScreen from "./views/Login/ChooseScreen";
import FriendScreen from "./views/Menu/FriendScreen";
import HistoryScreen from "./views/Menu/HistoryScreen";
import LegalScreen from "./views/Menu/LegalScreen";
import NoteScreen from "./views/Menu/NoteScreen";
import StatScreen from "./views/Menu/StatScreen";
import UserScreen from "./views/Menu/UserScreen";
import MenuScreen from "./views/Menu/MenuScreen"



const switchNavigator = createSwitchNavigator({
    Loader: LoaderScreen,
    Home: HomeScreen,
    Choose: ChooseScreen,
    Register: RegisterScreen,
    Login: LoginScreen,
    Game: GameScreen,
    Friend: FriendScreen,
    History: HistoryScreen,
    Legal: LegalScreen,
    Note: NoteScreen,
    Stat: StatScreen,
    User: UserScreen,
    Menu: MenuScreen

}, {
    initialRouteName: "Loader"
});

export default createAppContainer(switchNavigator);