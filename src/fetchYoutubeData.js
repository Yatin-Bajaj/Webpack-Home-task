const API_KEY = "56f5a71177604252af47e1a08245396a";
const env = {
  youtube_data_url: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyD9-a8Pihxz8mPAK8TN-YQgSDcdh2uTlfI&type=video&part=snippet&maxResults=15&q=javaScript",
}

export const fetchYoutubeData = async () => {

  try {
    const response = await fetch(`${env.youtube_data_url}`)
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    const data = await response.json()
    renderYoutubeItems(prepareData(data))
  } catch (error) {
    return console.log(error)
  }
}

const prepareData = (data) => {
  const newItemsArray = data.items.map((item) => {
    const { title, channelTitle: author, publishedAt, description } = item?.snippet;
    return { title, author, publishedAt, description };
  })
  return newItemsArray;
}



const renderYoutubeItems = (Items) => {
  let dataContainer = document.querySelector(".data-container");
  dataContainer.innerHTML = "";

  Items.forEach(item => {
    let title = document.createElement("p");
    let description = document.createElement("p");

    title.innerText = item.title;
    dataContainer.appendChild(title);
    

  });
}
