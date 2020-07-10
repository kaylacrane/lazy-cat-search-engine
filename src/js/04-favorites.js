'use strict';
function listenSeriesClicks() {
  const addFavorites = document.querySelectorAll('.js-add-favorites');
  addFavorites.forEach((addFav) => {
    addFav.addEventListener('click', updateFavorites);
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
    if (item.show.image) {
      codeHTML += `<a href="${item.show.url}" title="Visit ${item.show.name} on TVmaze">`;
      codeHTML += `<img src="${item.show.image.medium}" class="js-favoritesImage favorites-image" alt="Cover image for ${item.show.name}" /></a>`;
    } else {
      codeHTML += `<img src="${placeholderImg}" class="js-favoritesImage favorites-image" alt="Cover image for ${item.show.name}" />`;
    }
    codeHTML += `<h5 class="favorites-name">${item.show.name}</h5>`;
    codeHTML += `<span class="remove-favorites js-remove-favorites">`;
    codeHTML += `<i class="fas fa-minus-square"></i>`;
    codeHTML += `Remove</span>`;
    codeHTML += `</li >`;
  }
  const favoritesListDisplay = document.querySelector('.js-favorites-list');
  favoritesListDisplay.innerHTML = codeHTML;
}
