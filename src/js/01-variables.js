'use strict';

const searchBox = document.querySelector('.js-searchBox');
const searchButton = document.querySelector('.js-searchButton');
const seriesImage = document.querySelector('.js-seriesImage');
const seriesTitle = document.querySelector('.js-seriesTitle');
const placeholderImg = 'http://placekitten.com/g/200/300';

let searchValue;
let searchResults = [];
let favorites = [];
