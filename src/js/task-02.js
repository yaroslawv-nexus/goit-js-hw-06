const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsToElList = element => {
  const ingredientsEl = document.createElement(`li`);
  ingredientsEl.textContent = element;
  ingredientsEl.classList.add(`item`);
  return ingredientsEl;
};

const ingredientsElArray = ingredients.map(ingredientsToElList);

const ingredientsList = document.querySelector(`#ingredients`);
ingredientsList.append(...ingredientsElArray);