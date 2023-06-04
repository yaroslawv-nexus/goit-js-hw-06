const buttonDecrement = document.querySelector(`[data-action="decrement"]`);
const buttonIncrement = document.querySelector(`[data-action="increment"]`);
const valueCounter = document.querySelector(`#value`);
let value = 0;

buttonDecrement.addEventListener(`click`, () => {value -= 1; valueCounter.textContent = value});
buttonIncrement.addEventListener(`click`, () => {value += 1; valueCounter.textContent = value})





