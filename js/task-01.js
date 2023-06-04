const categoriesEl = document.querySelector("#categories");
const subCategories = categoriesEl.children;
console.log(`Number of categories: ${subCategories.length}`);

[...subCategories].forEach(element => {
    console.log(`Category: ${element.querySelector(`h2`).textContent}`)

    console.log(`Elements: ${element.querySelector(`ul`).children.length}`)

});