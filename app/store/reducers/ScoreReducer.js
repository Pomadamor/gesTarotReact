const initialState = {
        nbJoueur : 0,
        joueurs : [],
        turns : {
          id : [],
          preneur : [],
          roi: [],
          type : [],  
          score : [],    
        },
        preneur : "",
        roi: "",
        type : "",
        score: "",
        id:0,
        buttonTurnView : "Commencer une nouvelle partie",
}

function toogleScore(state = initialState, action){
    let nextState
    switch(action.type){
        case 'MUTATION_NBJOUEURS':
        // On ajoute les joueurs à la liste de joueurs
        nextState = {
            ...state,
            nbJoueur: action.value
        }
        return nextState
        case 'MUTATION_JOUEURS':
            // On ajoute les joueurs à la liste de joueurs
            nextState = {
                ...state,
                joueurs: [...state.joueurs, action.value]
            }
            return nextState
        case 'MUTATION_TURNS':
            return nextState
        case 'MUTATION_PRENEUR':
            return nextState
        case 'MUTATION_ROI':
            return nextState        
        case 'MUTATION_TYPE':
            return nextState
        case 'MUTATION_SCORE':
            return nextState        
        case 'MUTATION_ID':
            return nextState
        case 'MUTATION_BUTTONTURN':
            return nextState
        default:
            return nextState || state
        }
    }
        
export default toogleScore