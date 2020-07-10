'use strict';

function listenSeriesClicks() {
  const seriesCard = document.querySelectorAll('.seriesCard');
  seriesCard.forEach((card) => {
    card.addEventListener('click', updateFavorites);
  });
}

function updateFavorites(ev) {
  const clickedSeries = parseInt(ev.currentTarget.id);
  console.log(searchResults);
  const favoritesItem = searchResults.find(
    (series) => series.show.id === clickedSeries
  );
  //   favorites.push(click);
  console.log(favoritesItem);
}
