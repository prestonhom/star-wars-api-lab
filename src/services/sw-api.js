const BASE_URL = 'https://swapi.co/api/starships/'
export async function getAllStarShips(){
    return fetch(BASE_URL, {mode: 'cors'})
    .then(res => res.json());
}   

