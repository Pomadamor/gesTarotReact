const initialState = {
    pseudo : "Joueur 1",
    email: "",
    avatar: require("./assets/img/happy.png"),

    pseudo2 : "Joueur 2",
    email2: "",
    avatar2: "cat.png",

    pseudo3 : "Joueur 3",
    email3: "",
    avatar3: "dog.png",

    pseudo4 : "Joueur 4",
    email4: "",
    avatar4: "sheep.png",

    pseudo5 : "Joueur 5",
    email5: "",
    avatar5: "pig.png",
}

function tooglePlayer(state = initialState, action){
let nextState
switch(action.type){
    case 'MUTATION_PSEUDO':
    nextState = {
        ...state,
        pseudo: action.value
    }
    return nextState
    default:
        return nextState || state
    }
}
    
export default tooglePlayer