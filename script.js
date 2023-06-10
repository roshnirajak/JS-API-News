//https://gnews.io
const API_KEY = "7fdc760ae74f03c429371220b1acbc06";
const url = "https://gnews.io/api/v4/search?q=";

window.addEventListener('load', () => fetchNews("India"));

async function fetchNews(topic) {
    //response
    const res = await fetch(`${url}${topic}&lang=en&country=us&max=10&apikey=${API_KEY}`);
    //completing parsing the response body as JSON data
    const data = await res.json();
    console.log(data);
    bindData(data.articles);
}

function bindData(articles) {
    let cardsDiv = document.getElementById('cards-div');
    let cardsTemplate = document.getElementById('cards-template');

    cardsDiv.innerHTML = "";

    articles.forEach((article) => {
        if (!article.image) return;
        const cloneDiv = cardsTemplate.content.cloneNode(true);
        fillData(cloneDiv, article);
        cardsDiv.appendChild(cloneDiv);
    });
}

function fillData(cloneDiv, article) {
    const newImg = cloneDiv.querySelector('#news-img');
    const newTitle = cloneDiv.querySelector('#news-title');
    const newContent = cloneDiv.querySelector('#news-content');
    // console.log("filldata");
    
    newImg.src = article.image;
    newTitle.innerHTML= article.title;
    newContent.innerHTML= article.description;
}