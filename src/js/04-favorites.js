'use strict';

// EVENT LISTENERS
favsTitle.addEventListener('click', openCloseFavs);

function listenSeriesClicks() {
  const addFavorites = document.querySelectorAll('.js-add-favorites');
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

// EVENT HANDLERS & FUNCTIONS
/*Opens/closes favs list upon clicking favs title*/
function openCloseFavs() {
  favoritesListDisplay.classList.toggle('js-open-favs');
  favsTitleIcons.forEach((icon) => icon.classList.toggle('fa-flip-vertical'));
}
function updateFavorites(ev) {
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
    codeHTML += `<i class="fas fa-window-close remove-icon"></i>`;
    codeHTML += `Remove</span>`;
    if (item.show.image) {
      codeHTML += `<a href="${item.show.url}" title="Visit ${item.show.name} on TVmaze">`;
      codeHTML += `<img src="${item.show.image.medium}" class="js-favoritesImage favorites-image" alt="Cover image for ${item.show.name}" /></a>`;
    } else {
      codeHTML += `<img src="https://dummyimage.com/210x295/000/fff&text=${item.show.name}" class="js-favoritesImage favorites-image" alt="Cover image for ${item.show.name}" />`;
    }
    codeHTML += `</div >`;
  }
  favoritesListDisplay.innerHTML = codeHTML;
  listenFavoritesClicks();
}

function updateFavsInSearchResults() {}
/*locates card associated with clicked item*/
/*const seriesCards = document.querySelectorAll('.js-series-card');
let clickedCard;
seriesCards.forEach((card) => {
  if (parseInt(card.id) === clickedItemID) {
    clickedCard = card;
  }
});
favorites.forEach((fav) => {
  console.log(clickedCard.id, fav.show.id);
  if (fav.show.id === parseInt(clickedCard.id)) {
    clickedCard.classList.remove('js-card-favorite');
  } else {
   clickedCard.classList.add('js-card-favorite');
  }
});
 let clickedCard;
  seriesCards.forEach((card) => {
    if (parseInt(card.id) === clickedItemID) {
      clickedCard = card;
    }
  });
if (favItemIndex >= 0) {
    favorites.splice(favItemIndex, 1);
    clickedCard.classList.remove('js-card-favorite');
  } else if (favItemIndex === -1) {
    favorites.push(clickedSeries);
    clickedCard.classList.add('js-card-favorite');
  }
*/
