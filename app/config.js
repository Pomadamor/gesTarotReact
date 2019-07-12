import {createSwitchNavigator, createAppContainer} from "react-navigation";
import LoaderScreen from "./views/login/LoaderScreen";
import HomeScreen from "./views/HomeScreen";
import RegisterScreen from "./views/login/RegisterScreen";
import LoginScreen from "./views/login/LoginScreen";
import GameScreen from "./views/game/GameScreen";
import GrillChooseScreen from "./views/game/GrillChooseScreen";
import GrillScoreScreen from "./views/game/GrillScoreScreen";
import ChooseScreen from "./views/login/ChooseScreen";
import UserScreen from "./views/menu/UserScreen";
import MenuScreen from "./views/menu/MenuScreen";
import FriendsPlayersScreen from "./views/friends/FriendsPlayersScreen";
import ScannerScreen from "./views/ble/ScannerScreen";


const switchNavigator = createSwitchNavigator({
    Loader: LoaderScreen,
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
    Scanner: ScannerScreen
}, {
    initialRouteName: "Loader"
});

/**
 * Cette page permet de gérer la navigation de l'application avec loader par defaut
 * @param switchNavigator gère la navigation
 */

export default createAppContainer(switchNavigator);