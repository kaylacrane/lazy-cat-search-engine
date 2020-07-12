// TAKES SERVER RESPONSE AND DYNAMICALLY CREATES EACH SERIES CARD
function displayResults() {
  displayImgNoResults();
  let codeHTML = '';
  for (let index = 0; index < searchResults.length; index++) {
    const seriesId = searchResults[index].show.id;
    const seriesName = searchResults[index].show.name;
    const seriesImg = searchResults[index].show.image;
    const seriesURL = searchResults[index].show.url;
    codeHTML += `<article class="series-card js-series-card" id="${seriesId}">`;
    codeHTML += `<span class="series-card-favs js-series-card-favs" id="${seriesId}">`;
    codeHTML += `<i class="fas fa-plus-square"></i>`;
    codeHTML += ` Add to Favs</span>`;
    codeHTML += `<div class="img-container">`;
    codeHTML += `<a href="${seriesURL}" title='Visit ${seriesName} on TVmaze' target="_blank">`;
    if (seriesImg) {
      codeHTML += `<img src="${seriesImg.medium}" class="series-image js-series-image" alt="Cover image for ${seriesName}" /></a></div>`;
    } else {
      codeHTML += `<img src="${placeholderImg}${seriesName}" class="series-image js-series-image" alt="Cover image for ${seriesName}" /></a></div>`;
    }
    codeHTML += `<h3 class="series-title js-seriesTitle">${seriesName}</h3>`;
    codeHTML += `</article>`;
  }
  searchResultsSection.innerHTML = codeHTML;
  /* Paints each card that is a favorite series */
  showSearchResultFavorites();
  /* listener for removing or adding new favs from search results */
  listenSeriesClicks();
}

/* changes series card colors for series that have already been favorited*/
function showSearchResultFavorites() {
  const seriesCards = document.querySelectorAll('.js-series-card');
  seriesCards.forEach((card) => {
    const found = favorites.find((fav) => fav.show.id === parseInt(card.id));
    if (found) {
      card.classList.add('js-card-favorite');
    } else {
      card.classList.remove('js-card-favorite');
    }
  });
  changeFavButtonSearchResults();
}

/*changes fav button in search results cards if already a fav*/
function changeFavButtonSearchResults() {
  const addFavorites = document.querySelectorAll('.js-series-card-favs');
  addFavorites.forEach((addFav) => {
    let found = favorites.find((fav) => fav.show.id === parseInt(addFav.id));
    /* if found exists, then series is already favorited */
    if (found) {
      addFav.classList.add('js-series-favs-remove'); /*changes colors*/
      addFav.innerHTML = `<i class="fas fa-minus-square" aria-hidden="true"></i> Remove from Favs`;
    } else {
      addFav.classList.remove('js-series-favs-remove');
      addFav.innerHTML = `<i class="fas fa-plus-square"></i> Add to Favs`;
    }
  });
}

/* displays an image in search results area if no results found */
function displayImgNoResults() {
  if (searchResults.length === 0) {
    searchResultsSection.classList.add('js-no-results-img');
  } else {
    searchResultsSection.classList.remove('js-no-results-img');
  }
}
