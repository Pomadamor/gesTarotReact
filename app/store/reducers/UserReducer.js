import AsyncStorage from "@react-native-community/async-storage";

const initialState = {
    verif : false,
    id : "",
    pseudo : "Joueur",
    email: "",
    phone:"",
    token: "",
    color: "antiquewhite",
    image: require("../../assets/img/icon_user/cat.png"),
    avatar: require("../../assets/img/icon_user/cat.png"),
}

AsyncStorage.getItem("color").then(color => {
    if (color) {
        initialState.color = color
        // console.log(color, "color la")
    } else {
        // console.log("Pas de color enregistrer", color)
    }
})

AsyncStorage.getItem("pseudo").then(pseudo => {
    if (pseudo) {
        initialState.pseudo = pseudo
        // console.log(pseudo, "pseudo la")
    } else {
        // console.log("Pas de pseudo enregistrer", pseudo)
    }
})

AsyncStorage.getItem("image").then(image => {
    if (image) {
        initialState.image = parseInt(image)
        // console.log(parseInt(image), "image la")
    } else {
        // console.log("Pas de image enregistrer", image)
    }
})

AsyncStorage.getItem("avatar").then(avatar => {
    if (avatar) {
        initialState.avatar = parseInt(avatar)
        // console.log(avatar, "avatar la")
    } else {
        // console.log("Pas de avatar enregistrer", avatar)
    }
})

AsyncStorage.getItem("token").then(token => {
    if (token) {
        initialState.token = token
        // console.log(token, "la")
        //if token then authenticated so go to home
    } else {
        // console.log(AsyncStorage.getItem("token"), "la")
        // console.log("la", token)
    }
})
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
    case 'MUTATION_COLOR':
    nextState = {
        ...state,
        color: action.value
    }
    return nextState 
    case 'MUTATION_AVATAR':
    nextState = {
        ...state,
        avatar: action.value
    }
    return nextState
    case 'MUTATION_IMAGE':
    nextState = {
        ...state,
        image: action.value
    }
    return nextState
    case 'MUTATION_COLOR':
    nextState = {
        ...state,
        color: action.value
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