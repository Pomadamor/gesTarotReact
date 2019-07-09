const initialState = {
    pariPoint: 0,
    totalPoint: 0
}

function toogleCalcul(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'MUTATION_PARIPOINT':
            nextState = {
                ...state,
                pariPoint: action.value
            }
            return nextState

        case 'MUTATION_TOTALPOINT':
            nextState = {
                ...state,
                totalPoint: action.value
            }
            return nextState
        default:
            return nextState || state
    }
}

export default toogleCalcul