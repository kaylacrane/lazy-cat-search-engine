// SEARCH EVENT LISTENERS
searchBox.addEventListener('keyup', getSearchData);
searchButton.addEventListener('click', initiateServerRequest);

// FUNCTIONS FOR SERVER REQUEST
function getSearchData() {
  searchValue = searchBox.value;
}

function initiateServerRequest(ev) {
  ev.preventDefault();
  fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      searchResults = data;
      displayCats();
      displayNoDogs();
      displayResults();
    });
}
