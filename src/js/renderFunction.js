import { getRefs } from './getRefs';
function createPokemonItemsMarkup(pokemons) {
  return pokemons.map(({ name }) => `<li>${name}</li>`).join('');
}

export function renderPokemonList(pokemons) {
  getRefs().pokemonList.insertAdjacentHTML(
    'beforeend',
    createPokemonItemsMarkup(pokemons)
  );
}
