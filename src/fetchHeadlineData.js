import { NEWS_API_URL } from "./API_URL";

export const fetchHeadlineData = async () => {
    let newsDataPromise = await fetch(`${NEWS_API_URL}`);
    let parsedData = await newsDataPromise.json();
    renderNewsItems(parsedData.articles);
};

const renderNewsItems = (items) => {
    let dataContainer = document.querySelector(".data-container");
    dataContainer.innerHTML = "";

    items.forEach((item) => {
        let heading = document.createElement("p");
        heading.innerText = item.title;
        dataContainer.appendChild(heading);
    });
};
