const BASE_URL = 'https://swapi.co/api/';

export function getAllStarships() {
  return fetch(`${BASE_URL}starships`, {mode: "cors"})
    .then(res => res.json());
}
export function getAllPeople() {
    return fetch(`${BASE_URL}people`, {mode: "cors"})
      .then(res => res.json());
  }
  export function getAllPlanets() {
    return fetch(`${BASE_URL}planets`, {mode: "cors"})
      .then(res => res.json());
  }
  export function getAllFilms() {
    return fetch(`${BASE_URL}films`, {mode: "cors"})
      .then(res => res.json());
  }
  export function getAllVehicles() {
    return fetch(`${BASE_URL}vehicles`, {mode: "cors"})
      .then(res => res.json());
  }