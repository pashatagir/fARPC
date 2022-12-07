const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';
export function fetchAllPokemon() {
  return fetch(URL_BASE).then(response => {
    // console.log('fetch  response', response);

    if (!response.ok) {
      throw new Error('Упс щось пішло не так');
    }
    return response.json();
  });
}
