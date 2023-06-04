const inputRef = document.querySelector(`#font-size-control`);
const textRef = document.querySelector(`#text`);


inputRef.addEventListener(`input`, onChangeFontSize);

function onChangeFontSize(event) {
    textRef.setAttribute(`style`, `font-size:${event.currentTarget.value }px`)
};