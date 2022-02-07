import getElement from './getElement.js';
import presentDrinks from './presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const firstLetterURL =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

const form = getElement('.search-form');
const input = getElement('[name="drink"]');

form.addEventListener('keyup', (e) => {
  const nameRadio = getElement('#drink');
  const letterRadio = getElement('#alcohol');
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  if (nameRadio.checked) {
    presentDrinks(`${baseURL}${value}`);
  }
  if (letterRadio.checked) {
    presentDrinks(`${firstLetterURL}${value}`);
  }
  // presentDrinks(`${baseURL}${value}`);
});
