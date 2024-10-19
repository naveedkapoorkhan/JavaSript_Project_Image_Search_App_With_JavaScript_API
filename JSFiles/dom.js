export const formElement = document.querySelector("form");
export const inputElement = document.getElementById("search-input");
export const buttonElement = document.getElementById("search-button");
export const searchResults = document.querySelector(".search-results");
export const showMore = document.getElementById("show-more-button");

export function clearResults() {
    searchResults.innerHTML = "";
}

export function displayResults(results) {
    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");

        const img = document.createElement("img");
        img.src = result.urls.small; 
        img.alt = result.alt_description;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        const altText = result.alt_description || "No description";  // Default text if alt_description is empty
        imageLink.textContent = altText.length > 30 ? altText.substring(0, 30) + "..." : altText;

        //imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(img);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });
}

export function showMoreButton() {
    showMore.style.display = "block";
}
