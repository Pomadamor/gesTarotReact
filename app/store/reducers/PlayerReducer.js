const initialState = {
    pseudo1 : "Joueur 1",
    avatar1: require("../../assets/img/icon_user/happy.png"),

    pseudo2 : "Joueur 2",
    avatar2: require("../../assets/img/icon_user/cat.png"),
    color2:"lightgreen",

    pseudo3 : "Joueur 3",
    avatar3: require("../../assets/img/icon_user/dog.png"),
    color3:"lightsteelblue",

    pseudo4 : "Joueur 4",
    avatar4: require("../../assets/img/icon_user/sheep.png"),
    color4:"moccasin",

    pseudo5 : "Joueur 5",
    avatar5: require("../../assets/img/icon_user/pig.png"),
    color5:"mistyrose",

    choosePlayer: 0,
    calcul: 0,

    scoreJ1 : 0,
    scoreJ2 : 0,
    scoreJ3 : 0,
    scoreJ4 : 0,
    scoreJ5 : 0
}

/**
   * Fonction qui gere les mutations du reducer player
   */

function tooglePlayer(state = initialState, action){
let nextState
switch(action.type){
    case 'MUTATION_PSEUDO1':
    nextState = {
        ...state,
        pseudo1: action.value
    }
    return nextState
    case 'MUTATION_PSEUDO2':
    nextState = {
        ...state,
        pseudo2: action.value
    }
    return nextState
    case 'MUTATION_PSEUDO3':
    nextState = {
        ...state,
        pseudo3: action.value
    }
    return nextState
    case 'MUTATION_PSEUDO4':
    nextState = {
        ...state,
        pseudo4: action.value
    }
    return nextState
    case 'MUTATION_PSEUDO5':
    nextState = {
        ...state,
        pseudo5: action.value
    }
    return nextState
    case 'MUTATION_AVATAR1':
    nextState = {
        ...state,
        avatar1: action.value
    }
    return nextState
    case 'MUTATION_AVATAR2':
    nextState = {
        ...state,
        avatar2: action.value
    }
    return nextState
    case 'MUTATION_AVATAR3':
    nextState = {
        ...state,
        avatar3: action.value
    }
    return nextState
    case 'MUTATION_AVATAR4':
    nextState = {
        ...state,
        avatar4: action.value
    }
    return nextState
    case 'MUTATION_AVATAR5':
    nextState = {
        ...state,
        avatar5: action.value
    }
    return nextState
    case 'MUTATION_CHOOSE_PLAYER':
    nextState = {
        ...state,
        choosePlayer: action.value
    }
    return nextState
    case 'MUTATION_SCORE_J1':
    nextState = {
        ...state,
        scoreJ1: action.value
    }
    return nextState
    case 'MUTATION_SCORE_J2':
    nextState = {
        ...state,
        scoreJ2: action.value
    }
    return nextState
    case 'MUTATION_SCORE_J3':
    nextState = {
        ...state,
        scoreJ3: action.value
    }
    return nextState
    case 'MUTATION_SCORE_J4':
    nextState = {
        ...state,
        scoreJ4: action.value
    }
    return nextState
    case 'MUTATION_SCORE_J5':
    nextState = {
        ...state,
        scoreJ5: action.value
    }
    return nextState
    case 'MUTATION_CALCUL':
    nextState = {
        ...state,
        calcul: action.value
    }
    return nextState
    default:
        return nextState || state
    }
}
    
export default tooglePlayer