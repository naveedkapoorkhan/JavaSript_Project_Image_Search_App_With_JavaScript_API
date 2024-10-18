const accessKey="K-rfew2XnTROCxcBYb20U5mh_w0-Zl2yd2DQ_RLhK5w";
const formElement=document.querySelector("form");
const inputElement=document.getElementById("search-input");
const buttonElement=document.getElementById("search-button");
const searchResults=document.querySelector(".search-results"); // Fixed this line
const showMore=document.getElementById("show-more-button");

let inputData="";
let page=1;

async function searchImages(){
    inputData=inputElement.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response=await fetch(url);
    const data=await response.json();
    const results=data.results;

    if(page===1){
        searchResults.innerHTML="";
    }

    results.map((result)=>{
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const img = document.createElement("img");
        img.src = result.urls.small; 
        img.alt=result.alt_description;

        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.textContent=result.alt_description;

        imageWrapper.appendChild(img);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });

    page++;
    if(page>1){
        showMore.style.display="block";
    }
}

formElement.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();
});

showMore.addEventListener("click",(event)=>{
    event.preventDefault();
    searchImages(); // Removed resetting page to 1
});
