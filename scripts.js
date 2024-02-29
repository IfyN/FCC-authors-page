const authorContainer = document.getElementById("author-container");
const loadMoreBtn = document.getElementById("load-more-btn");

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(`There was an error: ${err}`);
  });

//add functionality to load more authors and disable button after all response is displayed
const fetchMoreAuthors = () => {
  startingIndex += 8;
  endingIndex += 8;

  displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  if (authorDataArr.length <= endingIndex) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = 'No more data to load';
  }
};

//display authors in UI
const displayAuthors = (authors) => {
  authors.forEach(({ author, image, url, bio }, index) => {
    authorContainer.innerHTML += `
    <div id="${index}" class="user-card">
      <h2 class="author-name">${author}</h2>
      <img class="user-img" src="${image}" alt="${author} avatar" />
        <p class="bio">${bio}</p>
      <a class="author-link" href="${url}" target="_blank">${author}'s author page</a>
    </div>
  `;
  });
};