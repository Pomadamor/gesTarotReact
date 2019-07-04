import { createStore, combineReducers} from 'redux';
import toogleScore from './reducers/ScoreReducer'
import tooglePlayer from './reducers/PlayerReducer'

export default createStore(combineReducers({tooglePlayer, toogleScore}))