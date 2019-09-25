const initialState = {
    friends : []
}

/**
* Fonction qui gere les mutations du reducer score
*/
function toogleFriends(state = initialState, action){
// console.log("toto 1", action)
let nextState
switch(action.type){
    case 'MUTATION_FRIENDS':
    nextState = {
        ...state,
        friends: [...state.friends, action.value]
    }
    case 'MUTATION_FRIENDS_DELETE':
    nextState = {
        ...state,
        friends: action.value
    }
    return nextState
    default:
        return nextState || state
    }
}
    
export default toogleFriends