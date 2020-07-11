'use strict';

const searchBox = document.querySelector('.js-searchBox');
const searchButton = document.querySelector('.js-searchButton');
const seriesImage = document.querySelector('.js-seriesImage');
const seriesTitle = document.querySelector('.js-seriesTitle');
const searchResultsSection = document.querySelector(
  '.js-search-results-section'
);
const favsTitle = document.querySelector('.js-favorites-title');
const favsTitleIcons = document.querySelectorAll('.js-favorites-title-icon');
const favoritesListDisplay = document.querySelector('.js-favorites-list');
const placeholderImg = 'https://dummyimage.com/210x295/ffb6c1/fff.png&text=';

let searchValue;
let searchResults = [];
let favorites = [];
