import { getRefs } from './js/getRefs';
import { fetchAllPokemon } from './js/pokemonAPI';
import { renderPokemonList } from './js/renderFunction';

const refs = getRefs();

refs.buttonFetch.addEventListener('click', onButtonFetchClick);

function onButtonFetchClick(evt) {
  fetchAllPokemon().then(({ results, count }) => {
    renderPokemonList(results);
  });
}
//  при кліку овідмальовуємо детальну інфу про покемона назва, зображення сзаду спереді
// мають бути абілкі його вміння, hp, короче все що в нього є
// зробити кнопку і інпут в якому можна вводити ім'я
