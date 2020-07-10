'use strict';

function listenSeriesClicks() {
  const seriesCard = document.querySelectorAll('.seriesCard');
  console.log(seriesCard);
  seriesCard.forEach((card) => {
    card.addEventListener('click', updateFavorites);
  });
}

function updateFavorites(ev) {
  console.log(ev.currentTarget.id);
}
