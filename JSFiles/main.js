import { fetchImages } from './api.js';
import { formElement, inputElement, searchResults, showMore, clearResults, displayResults, showMoreButton } from './dom.js';

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputElement.value;
    const results = await fetchImages(inputData, page);

    if (page === 1) {
        clearResults();
    }

    displayResults(results);
    page++;
    if (page > 1) {
        showMoreButton();
    }
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", (event) => {
    event.preventDefault();
    searchImages();
});
