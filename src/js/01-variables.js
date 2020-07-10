'use strict';

const searchBox = document.querySelector('.js-searchBox');
const searchButton = document.querySelector('.js-searchButton');
const seriesImage = document.querySelector('.js-seriesImage');
const seriesTitle = document.querySelector('.js-seriesTitle');
const searchResultsSection = document.querySelector(
  '.js-search-results-section'
);
const placeholderImg = '';

let searchValue;
let searchResults = [];
let favorites = [];
