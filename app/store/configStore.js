import { createStore, combineReducers} from 'redux';
import toogleScore from './reducers/ScoreReducer'
import tooglePlayer from './reducers/PlayerReducer'
import toogleUser from './reducers/UserReducer'
import toogleFriends from './reducers/FriendsReducer'
import toogleParty from './reducers/PartyReducer'
import logger from 'redux-logger'
import { applyMiddleware } from 'redux';



export default createStore(combineReducers({tooglePlayer, toogleScore, toogleUser, toogleFriends, toogleParty})
 ,  applyMiddleware(logger)
)