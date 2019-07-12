import apiRoutes from "./api-routes";
import AsyncStorage from "@react-native-community/async-storage";

export function RegisterUser(data = null) {
  const { url, method, headers } = apiRoutes.register;
  return fetch(url, {
    method,
    headers,
    body: data
  }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      const id = { type: "MUTATION_ID", value: responseJson.id }
      const email = { type: "MUTATION_EMAIL", value: responseJson.email }
      const phone = { type: "MUTATION_PHONE", value: responseJson.phone }
      const api_token = { type: "MUTATION_TOKEN", value: responseJson.api_token }

      this.props.dispatch(id)
      this.props.dispatch(email)
      this.props.dispatch(phone)
      this.props.dispatch(api_token)
      console.log(responseJson.api_token)

      const token = responseJson.api_token;
      console.log(token)

      AsyncStorage.setItem("token", token)
      this.props.navigation.navigate("Loader");
      return responseJson;

    })
    .catch((error) => console.log(error))
}

export function LoginUser(data) {

  const { url, method, headers } = apiRoutes.login;
  return fetch(url, {
    method,
    headers,
    body: data
  }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      this.props.navigation.navigate("Login")
        const actionLogin = { type: "MUTATION_PSEUDO", value: true }
        this.props.dispatch(actionLogin)
      return responseJson;

    })
    .catch((error) => console.log(error))
}

export function DeleteUser(data) {
  const { url, method, headers } = apiRoutes.remove;
  return fetch(url, {
    method,
    headers,
    body: data
  }).then((response) => response.json())
    .catch((error) => console.log(error))
}

export function UpdateUser(data) {
  const { url, method, headers } = apiRoutes.update;
  return fetch(url, {
    method,
    headers,
    body: data
  }).then((response) => response.json())
    .catch((error) => console.log(error))
}

export function DetailsUser(data) {
  const { url, method, headers } = apiRoutes.details;

  return fetch(url, {
    method,
    headers,
    body: data
  }).then((response) => response.json())
    .catch((error) => console.log(error))
}