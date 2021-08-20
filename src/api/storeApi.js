import { handleResponse, handleError } from "./apiUtils";
const baseUrl = 'http://localhost:3001/stores/';


export function getStores() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getStore(id) {
  return fetch(baseUrl + id)
    .then(handleResponse)
    .catch(handleError);
}