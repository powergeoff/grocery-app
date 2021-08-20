import { handleResponse, handleError } from "./apiUtils";
const baseUrl = 'http://localhost:3001/groceries/';


export function getGroceries() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getGrocery(id) {
  return fetch(baseUrl + id)
    .then(handleResponse)
    .catch(handleError);
}


export function saveGrocery(item) {
  return fetch(baseUrl + (item.id || ""), {
    method: item.id === null ? "POST" : "PUT", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...item,
      // Parse authorId to a number (in case it was sent as a string).
      id: parseInt(item.id, 10),
      checked: false
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteGrocery(groceryId) {
  return fetch(baseUrl + groceryId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
