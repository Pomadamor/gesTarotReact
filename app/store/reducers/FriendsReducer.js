const initialState = {
    friends : []
}

/**
* Fonction qui gere les mutations du reducer score
*/
function toogleFriends(state = initialState, action){
console.log("toto", action)
let nextState
switch(action.type){
    case 'MUTATION_TURNS':
    nextState = {
        ...state,
        turns: [...state.turns, action.value]
    }
    return nextState
    default:
        return nextState || state
    }
}
    
export default toogleFriends