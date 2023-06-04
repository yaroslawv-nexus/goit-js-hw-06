const inputRef = document.querySelector(`#validation-input`);



inputRef.addEventListener(`blur`, onColorValidInput);

function onColorValidInput(event) {
    if (event.currentTarget.value.length !== 6) {
        event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid");
        return;
    } 
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
}