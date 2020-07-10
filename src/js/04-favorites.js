'use strict';

function listenSeriesClicks() {
  const seriesCard = document.querySelectorAll('.seriesCard');
  seriesCard.forEach((card) => {
    card.addEventListener('click', updateFavorites);
  });
}

/*searches within favorites array to see if clicked item already exists or not*/
function updateFavorites(ev) {
  const clickedItemID = parseInt(ev.currentTarget.id);
  const clickedSeries = searchResults.find(
    (series) => series.show.id === clickedItemID
  );
  /*if favItemIndex has a value, then the clicked item is already in the favs list*/
  const favItemIndex = favorites.findIndex(
    (fav) => fav.show.id === clickedItemID
  );

  if (favItemIndex >= 0) {
    favorites.splice(favItemIndex, 1);
  } else if (favItemIndex === -1) {
    favorites.push(clickedSeries);
  }
  console.log('favorites list:', favorites);
  displayFavorites();
}

function displayFavorites() {
  /* if you forget the =""; you will get an undefined element*/
  let codeHTML = '';
  for (const item of favorites) {
    codeHTML += `<li class="favorites-item">`;
    codeHTML += `<img src="${item.show.image.medium}" class="js-favoritesImage favorites-image" alt="Cover image for ${item.show.name}" />`;
    codeHTML += `<h5 class="favorites-name">${item.show.name}</h5>`;
    codeHTML += `</li >`;
  }
  const favoritesListDisplay = document.querySelector('.js-favorites-list');
  favoritesListDisplay.innerHTML = codeHTML;
}
