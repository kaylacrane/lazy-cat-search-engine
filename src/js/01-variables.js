'use strict';

const searchBox = document.querySelector('.js-searchBox');
const searchButton = document.querySelector('.js-searchButton');
const seriesTitle = document.querySelector('.js-seriesTitle');
const searchResultsSection = document.querySelector(
  '.js-search-results-section'
);
const favsTitle = document.querySelector('.js-favorites-title');
const favoritesListDisplay = document.querySelector('.js-favorites-list');
const placeholderImg = 'https://dummyimage.com/210x295/ffb6c1/000000.png&text=';
const placeholderImgFavs =
  'https://dummyimage.com/210x295/75e0db/000000.png&text=';

let searchValue;
let searchResults = [];
let favorites = [];
