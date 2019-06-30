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
        partenaire: "",
        roi: "",
        type : "",
        score: "",
        bou:0,
        id:0,
        buttonTurnView : "Commencer une nouvelle partie",
        turnsScore : [{
            victoire : false,
            preneurScore : 0,
            partenaireScore : 0,
            autreScore : 0
        }],
        victoire : false,
        preneurScore : 0,
        partenaireScore : 0,
        autreScore : 0

}

function toogleScore(state = initialState, action){
    let nextState
    switch(action.type){
        case 'MUTATION_NBJOUEURS':
        nextState = {
            ...state,
            nbJoueur: action.value
        }
        return nextState
        case 'MUTATION_JOUEURS':
        nextState = {
            ...state,
            joueurs: [...state.joueurs, action.value]
        }
        return nextState
        case 'MUTATION_TURNS':
        nextState = {
            ...state,
            turns: [...state.turns, action.value]
        }
        return nextState
        case 'MUTATION_PRENEUR':
        nextState = {
            ...state,
            preneur: action.value
        }
        return nextState
        case 'MUTATION_PARTENAIRE':
        nextState = {
            ...state,
            partenaire: action.value
        }
        return nextState
        case 'MUTATION_ROI':
        nextState = {
            ...state,
            roi: action.value
        }
        return nextState        
        case 'MUTATION_TYPE':
        nextState = {
            ...state,
            type: action.value
        }
            return nextState
        case 'MUTATION_SCORE':
        nextState = {
            ...state,
            score: action.value
        }
            return nextState
        case 'MUTATION_BOU':
        nextState = {
            ...state,
            bou: action.value
        }
            return nextState        
        case 'MUTATION_ID':
        nextState = {
            ...state,
            id: action.value
        }        
            return nextState
        case 'MUTATION_BUTTONTURN':
        nextState = {
            ...state,
            buttonTurnView: action.value
        }
            return nextState
        case 'MUTATION_VICTOIRE':
        nextState = {
            ...state,
            victoire: action.value
        }
            return nextState
        case 'MUTATION_PRENEURSCORE':
        nextState = {
            ...state,
            preneurScore: action.value
        }
            return nextState
        case 'MUTATION_PARTENAIRESCORE':
        nextState = {
            ...state,
            partenaireScore: action.value
        }
            return nextState
        case 'MUTATION_AUTRESCORE':
        nextState = {
            ...state,
            autreScore: action.value
        }
            return nextState
        default:
            return nextState || state
        }
    }
        
export default toogleScore