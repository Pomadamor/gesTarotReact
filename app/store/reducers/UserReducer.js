const initialState = {
    verif : false,
    id : "",
    pseudo : "Joueur 1",
    email: "",
    phone:"",
    token: "",
    avatar: require("../../assets/img/icon_user/happy.png"),

}

/**
   * Fonction qui gere les mutations du reducer user
   */
function toogleUser(state = initialState, action){
let nextState
switch(action.type){
    case 'MUTATION_PSEUDO':
    nextState = {
        ...state,
        pseudo: action.value
    }
    return nextState
   
    case 'MUTATION_AVATAR':
    nextState = {
        ...state,
        avatar: action.value
    }
    return nextState
    case 'MUTATION_EMAIL':
    nextState = {
        ...state,
        email: action.value
    }
    return nextState
    case 'MUTATION_TOKEN':
    nextState = {
        ...state,
        token: action.value
    }
    return nextState
    case 'MUTATION_ID':
    nextState = {
        ...state,
        id: action.value
    }
    return nextState
    case 'MUTATION_PHONE':
    nextState = {
        ...state,
        phone: action.value
    }
    return nextState
    case 'MUTATION_VERIF':
    nextState = {
        ...state,
        verif: action.value
    }
    return nextState
    default:
        return nextState || state
    }
}
    
export default toogleUser