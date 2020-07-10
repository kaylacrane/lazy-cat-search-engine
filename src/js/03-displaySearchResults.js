'use strict';

function displaySeries() {
  let codeHTML = '';

  for (let index = 0; index < searchResults.length; index++) {
    let seriesImg = searchResults[index].show.image;
    let seriesName = searchResults[index].show.name;
    let seriesId = searchResults[index].show.id;
    codeHTML += `<article class="seriesCard" id="${seriesId}">`;
    codeHTML += `<div class="imgContainer">`;
    if (seriesImg) {
      codeHTML += `<img src="${seriesImg.medium}" class="seriesImage js-seriesImage" alt="Cover image for ${seriesName}" /></div>`;
    } else {
      codeHTML += `<img src="${placeholderImg}" class="seriesImage js-seriesImage" alt="Cover image for ${seriesName}" /></div>`;
    }

    codeHTML += `<h3 class="seriesTitle js-seriesTitle">${seriesName}</h3>`;
    codeHTML += `</article>`;
  }
  const searchResultsSection = document.querySelector(
    '.js-searchResultsSection'
  );
  searchResultsSection.innerHTML =
    `<h2 class="s">Your search results:</h2>` + codeHTML;
  listenSeriesClicks();
}
