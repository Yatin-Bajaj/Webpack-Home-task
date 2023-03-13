import { YOUTUBE_API_URL } from "./API_URL";

export const fetchYoutubeData = async () => {
  try {
    const response = await fetch(`${YOUTUBE_API_URL}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    renderYoutubeItems(prepareData(data));
  } catch (error) {
    return console.log(error);
  }
};

const prepareData = (data) => {
  const newItemsArray = data.items.map((item) => {
    const {
      title,
      channelTitle: author,
      publishedAt,
      description,
    } = item?.snippet;
    return { title, author, publishedAt, description };
  });
  return newItemsArray;
};

const renderYoutubeItems = (Items) => {
  let dataContainer = document.querySelector(".data-container");
  dataContainer.innerHTML = "";

  Items.forEach((item) => {
    let title = document.createElement("p");
    let description = document.createElement("p");

    title.innerText = item.title;
    dataContainer.appendChild(title);
  });
};
