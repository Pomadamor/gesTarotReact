const initialState = {
    nbJoueur: 0,
    joueurs: [],
    turns: [],
    preneur: "",
    partenaire: "",
    roi: "",
    type: "",
    score: parseInt(0),
    bou: 0,
    id: 0,
    buttonTurnView: "Commencer une nouvelle partie",
    victoire: false,
    preneurScore: parseInt(0),
    partenaireScore: parseInt(0),
    autre_score: parseInt(0),
    game_id: 0
}

/**
   * Fonction qui gere les mutations du reducer score
   */
function toogleScore(state = initialState, action) {
    // console.log("toto", action)
    let nextState
    switch (action.type) {
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
        case 'MUTATION_autre_score':
            nextState = {
                ...state,
                autre_score: action.value
            }
            return nextState
        case 'MUTATION_GAME_ID':
            nextState = {
                ...state,
                game_id: action.value
            }
            return nextState
        default:
            return nextState || state
    }
}

export default toogleScore