'use strict';
searchBox.addEventListener('keyup', getSearchData);
searchButton.addEventListener('click', initiateServerRequest);

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
      displaySeries();
    });
}
