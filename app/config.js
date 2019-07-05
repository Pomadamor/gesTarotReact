import {createSwitchNavigator, createAppContainer} from "react-navigation";
import LoaderScreen from "./views/login/LoaderScreen";
import HomeScreen from "./views/HomeScreen";
import RegisterScreen from "./views/login/RegisterScreen";
import LoginScreen from "./views/login/LoginScreen";
import GameScreen from "./views/game/GameScreen";
import GrillChooseScreen from "./views/game/GrillChooseScreen";
import GrillScoreScreen from "./views/game/GrillScoreScreen";
import ChooseScreen from "./views/login/ChooseScreen";
import FriendScreen from "./views/menu/FriendScreen";
import HistoryScreen from "./views/menu/HistoryScreen";
import LegalScreen from "./views/menu/LegalScreen";
import NoteScreen from "./views/menu/NoteScreen";
import StatScreen from "./views/menu/StatScreen";
import UserScreen from "./views/menu/UserScreen";
import MenuScreen from "./views/menu/MenuScreen";
import FriendsPlayersScreen from "./views/friends/FriendsPlayersScreen";

const switchNavigator = createSwitchNavigator({
    Loader: LoaderScreen,
    Home: HomeScreen,
    Choose: ChooseScreen,
    Register: RegisterScreen,
    Login: LoginScreen,
    Game: GameScreen,
    GrillChoose: GrillChooseScreen,
    GrillScore: GrillScoreScreen,
    Friend: FriendScreen,
    History: HistoryScreen,
    Legal: LegalScreen,
    Note: NoteScreen,
    Stat: StatScreen,
    User: UserScreen,
    Menu: MenuScreen,
    FriendsPlayers: FriendsPlayersScreen
}, {
    initialRouteName: "Loader"
});

export default createAppContainer(switchNavigator);