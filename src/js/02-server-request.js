/* eslint-disable strict */
// SEARCH EVENT LISTENERS
searchBox.addEventListener('keyup', getSearchData);
searchButton.addEventListener('click', initiateServerRequest);

// FUNCTIONS FOR SERVER REQUEST
function getSearchData() {
  searchValue = searchBox.value;
}

function initiateServerRequest(ev) {
  ev.preventDefault();
  fetch(`http://api.tvmaze.com/search/shows?q=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      searchResults = data;
      console.log(data);
      displayCats();
      displayNoDogs();
      displayResults();
    });
}
