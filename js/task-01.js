const categoriesEl = document.querySelector("#categories");
const subCategories = categoriesEl.children;
console.log(`Number of categories: ${subCategories.length}`);

[...subCategories].map(element => {
    // console.log(`Category: ${element.querySelector(`h2`).textContent}`)
    // console.log(`Elements: ${element.querySelector(`ul`).children.length}`)
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.lastElementChild.children.length}`)
});