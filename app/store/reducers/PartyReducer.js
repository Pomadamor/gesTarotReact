const initialState = {
    party : [],
    watchParty : []
}

/**
* Fonction qui gere les mutations du reducer score
*/
function toogleParty(state = initialState, action){
console.log("toto 1", action)
let nextState
switch(action.type){
    case 'MUTATION_PARTY':
    nextState = {
        ...state,
        party: [...state.party, action.value]
    }
    return nextState
    case 'MUTATION_WATCH_PARTY':
    nextState = {
        ...state,
        watchParty: [...state.watchParty, action.value]
    }
    return nextState
    default:
        return nextState || state
    }
}
    
export default toogleParty