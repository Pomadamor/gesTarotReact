const BASE_URL = "https://cciexpress.scalingo.io";

export default {
    register: {
        method: "POST",
        url: `${BASE_URL}/users`
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