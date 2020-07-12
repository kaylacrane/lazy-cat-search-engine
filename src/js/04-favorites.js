'use strict';

// EVENT LISTENERS
favsTitle.addEventListener('click', openCloseFavs);

function listenSeriesClicks() {
  const addFavorites = document.querySelectorAll('.js-series-card-favs');
  addFavorites.forEach((addFav) => {
    addFav.addEventListener('click', updateFavorites);
  });
}

function listenFavoritesClicks() {
  const removeFavorites = document.querySelectorAll('.js-remove-favorites');
  removeFavorites.forEach((remove) => {
    remove.addEventListener('click', updateFavorites);
  });
}
/*deletes all favs in list*/
const deleteAllFavs = document.querySelector('.js-delete-favs-icon');
deleteAllFavs.addEventListener('click', resetFavsList);

function resetFavsList() {
  favorites = [];
  updateLocalStorage();
  loadLocalStorage();
  showSearchResultFavorites();
}

// EVENT HANDLERS & FUNCTIONS
/*Opens/closes favs list upon clicking favs title*/
function openCloseFavs() {
  favoritesListDisplay.classList.toggle('js-open-favs');
}
function updateFavorites(ev) {
  changeFavButtonSearchResults();
  /*searches within favorites array to see if clicked item already exists or not*/
  const clickedItemID = parseInt(ev.currentTarget.id);
  const clickedSeries = searchResults.find(
    (series) => series.show.id === clickedItemID
  );

  /*finds clicked series inside favs list, if possible*/
  const favItemIndex = favorites.findIndex(
    (fav) => fav.show.id === clickedItemID
  );

  /*if favItemIndex has a value, then the clicked item is already in the favs list*/
  if (favItemIndex >= 0) {
    favorites.splice(favItemIndex, 1);
  } else if (favItemIndex === -1) {
    favorites.push(clickedSeries);
  }
  displayFavorites();
  updateLocalStorage();
  showSearchResultFavorites();
}

function displayFavorites() {
  /* if you forget the =""; you will get an undefined element*/
  let codeHTML = '';
  for (const item of favorites) {
    codeHTML += `<div class="favorites-item">`;
    codeHTML += `<span class="remove-favorites js-remove-favorites" id="${item.show.id}" title="Remove from favorites list">`;
    codeHTML += `<i class="fas fa-minus-square remove-icon"></i>`;
    codeHTML += `Remove</span>`;
    codeHTML += `<a href="${item.show.url}" title="Visit ${item.show.name} on TVmaze">`;
    if (item.show.image) {
      codeHTML += `<img src="${item.show.image.medium}" class="js-favoritesImage favorites-image" alt="Cover image for ${item.show.name}" />`;
    } else {
      codeHTML += `<img src="${placeholderImgFavs}${item.show.name}" class="js-favoritesImage favorites-image" alt="Cover image for ${item.show.name}" />`;
    }
    codeHTML += `</a></div >`;
  }
  favoritesListDisplay.innerHTML = codeHTML;
  listenFavoritesClicks();
}
