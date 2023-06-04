function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesRef = document.querySelector(`#boxes`);
const buttonCreateRef = document.querySelector(`[data-create]`);
const buttonDestroyRef = document.querySelector(`[data-destroy]`);
const inputRef = document.querySelector(`#controls input`);

function createBoxes(amount) {
  const arrayElements = [];
  let size = 30;
  for (let i = 0; i <= amount; i += 1) {
    const elementHtml = `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>`
    boxesRef.innerHTML += elementHtml;
    size += 10;
  }
  
}

buttonCreateRef.addEventListener(`click`, () => {
  createBoxes(inputRef.value);
})

buttonDestroyRef.addEventListener(`click`, () =>{
  boxesRef.innerHTML = "";
})
``