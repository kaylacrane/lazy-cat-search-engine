/* eslint-disable strict */
// FAVS EVENT LISTENERS
favsTitle.addEventListener(
  'click',
  openCloseFavs
); /*opens favs list upon click on title*/

/* adds/removes series from favs upon clicking search results card */
function listenSeriesClicks() {
  const addFavorites = document.querySelectorAll('.js-series-card-favs');
  addFavorites.forEach((addFav) => {
    addFav.addEventListener('click', updateFavorites);
  });
}

/*removes series from favs upon clicking favs list item */
function listenFavoritesClicks() {
  const removeFavorites = document.querySelectorAll('.js-remove-favorites');
  removeFavorites.forEach((remove) => {
    remove.addEventListener('click', updateFavorites);
  });
}

/*deletes all favs in list*/
const deleteAllFavs = document.querySelector('.js-delete-favs-icon');
deleteAllFavs.addEventListener('click', resetFavsList);

// EVENT HANDLERS & FUNCTIONS
/*Opens/closes favs list upon clicking favs title*/
function openCloseFavs() {
  favoritesListDisplay.classList.toggle('js-open-favs');
}

/* clears favs list and favs local storage, updates search results*/
function resetFavsList() {
  favorites = [];
  updateLocalStorage();
  loadLocalStorage();
  showSearchResultFavorites();
  updateFavsNumber();
}

/* dynamically creates and displays favs items */
function displayFavorites() {
  /* if you forget the =""; you will get an undefined element*/
  let codeHTML = '';
  for (const item of favorites) {
    codeHTML += `<div class="favorites-item">`;
    codeHTML += `<span class="remove-favorites js-remove-favorites" id="${item.show.id}" title="Remove from favorites list">`;
    codeHTML += `<i class="fas fa-minus-square remove-icon"></i>`;
    codeHTML += `Remove</span>`;
    codeHTML += `<a href="${item.show.url}" title="Visit ${item.show.name} on TVmaze" target="_blank">`;
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

/* adds/removes items in favs list */
function updateFavorites(ev) {
  const clickedItemID = parseInt(ev.currentTarget.id);
  /*searches within favorites array to see if clicked item already exists or not*/
  const clickedSeries = searchResults.find(
    (series) => series.show.id === clickedItemID
  );
  /*finds clicked series inside favs list, if possible*/
  const favItemIndex = favorites.findIndex(
    (fav) => fav.show.id === clickedItemID
  );
  /*if favItemIndex has a value, then the clicked item is already in the favs list*/
  if (favItemIndex >= 0) {
    /* removes item */
    favorites.splice(favItemIndex, 1);
  } else if (favItemIndex === -1) {
    /* adds item */
    favorites.push(clickedSeries);
  }
  /*updates all other associated favs settings */
  changeFavButtonSearchResults();
  displayFavorites();
  updateLocalStorage();
  showSearchResultFavorites();
  updateFavsNumber();
}

/* updates favorites counter in favs title bar */
function updateFavsNumber() {
  const favsNumber = document.querySelector('.js-favs-count');
  favsNumber.innerHTML = favorites.length;
}
