import { createStore, combineReducers} from 'redux';
import toogleScore from './reducers/ScoreReducer'
import tooglePlayer from './reducers/PlayerReducer'
import toogleUser from './reducers/UserReducer'
import toogleCalcul from './reducers/CalculScoreReducer'

export default createStore(combineReducers({tooglePlayer, toogleScore, toogleUser, toogleCalcul}))