'use strict';

function displayResults() {
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
    codeHTML += `<a href="${seriesURL}" title="Visit ${seriesName} on TVmaze">`;
    if (seriesImg) {
      codeHTML += `<img src="${seriesImg.medium}" class="series-image js-series-image" alt="Cover image for ${seriesName}" /></a></div>`;
    } else {
      codeHTML += `<img src="${placeholderImg}${seriesName}" class="series-image js-series-image" alt="Cover image for ${seriesName}" /></a></div>`;
    }
    codeHTML += `<h3 class="series-title js-seriesTitle">${seriesName}</h3>`;
    codeHTML += `</article>`;
  }
  searchResultsSection.innerHTML = codeHTML;
  showSearchResultFavorites();
  listenSeriesClicks();
}

/* adds background color to search results that have already been favorited*/
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
    if (found) {
      console.log(addFav);
      addFav.innerHTML = `<i class="fas fa-minus-square" aria-hidden="true"></i> Remove from Favs`;
    } else {
      addFav.innerHTML = `<i class="fas fa-plus-square"></i> Add to Favs`;
    }
  });
}
