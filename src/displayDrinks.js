import getElement from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayDrinks = async ({ drinks }) => {
  hideLoading();
  const section = getElement('.section-center');
  const title = getElement('.title');
  if (!drinks) {
    hideLoading();
    title.textContent = 'Sorry, no drinks matched your search';
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrinkThumb: image, strDrink: name } = drink;
      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join('');
  // Hide Loading
  title.textContent = '';
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
