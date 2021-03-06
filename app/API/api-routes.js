
const BASE_URL = "https://gestarot-api.lerna.eu/api";


/**
   * Fonction qui permet de définir les détail d'envoi a l'api
*/
export default {
    register: {
        method: "POST",
        url: `${BASE_URL}/user`,
    },
    details:{
        method: "GET",
        url: `${BASE_URL}/user`,
        headers: {'Content-Type': 'application/json', token: token},
    },
    login: {
        method: "POST",
        url: `${BASE_URL}/user/login`,
        headers: {'Content-Type': 'application/json'},
    },
    remove: {
        method: "DELETE",
        // url: `${BASE_URL}/user/${id}`,
        headers: {'Content-Type': 'application/json', token: token},
    },
    update: {
        method: "POST",
        // url: `${BASE_URL}/user/${id}`,
        headers: {'Content-Type': 'application/json', token: token},
    }
}