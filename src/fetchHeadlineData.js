const API_KEY = "";


export const fetchHeadlineData = async () => {
    let newsDataPromise = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    let parsedData = await newsDataPromise.json();
    renderNewsItems(parsedData.articles);
}

const renderNewsItems = (items) => {
    let dataContainer = document.querySelector(".data-container");
    dataContainer.innerHTML = "";

    items.forEach(item => {
        let heading = document.createElement("p");
        heading.innerText = item.title;
        dataContainer.appendChild(heading);
    });
}

