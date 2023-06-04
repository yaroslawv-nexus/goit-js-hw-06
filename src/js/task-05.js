const inputName = document.querySelector(`#name-input`);
const outputName = document.querySelector(`#name-output`);

inputName.addEventListener(`input`, onChangeName);

function onChangeName() {
    outputName.textContent = inputName.value;
    if (!inputName.value) {
        outputName.textContent = "Anonymous";
    }
}