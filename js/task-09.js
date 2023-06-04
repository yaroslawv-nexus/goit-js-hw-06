function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const bodyRef = document.querySelector(`body`);
const buttonChangeRef = document.querySelector(`.change-color`);
const textColorRef = document.querySelector(`.color`);

buttonChangeRef.addEventListener(`click`, () =>{
   const color = getRandomHexColor();
   textColorRef.textContent = color;
   bodyRef.setAttribute(`style`, `background-color:${color}`);
})
