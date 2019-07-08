const BASE_URL = "http://51.15.203.158/api";

export default {
    register: {
        method: "POST",
        url: `${BASE_URL}/user`
    },
    retrieve: {
        method: "GET",
        url: `${BASE_URL}/users`
    },
    update: {
        method: "PUT",
        url: `${BASE_URL}/users`
    },
    remove: {
        method: "DELETE",
        url: `${BASE_URL}/users`
    }
}