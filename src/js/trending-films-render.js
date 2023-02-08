import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import {
  fetchFilmsAPI,
  fetchMoreFilmsAPI,
  fetchMoreGenresAPI,
  fetchGenresAPI,
} from './film-api';

export { createCardMarkup };

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const refs = {
  movieList: document.querySelector('.home'),
  pagination: document.querySelector('.tui-pagination'),
  filmModalList: document.querySelector('.backdrop'),
};

const noPosterImg =
  'https://freedesignfile.com/upload/2018/11/Characters-in-film-design-elements-background-vector-graphic-715.jpg';
const basicImgURL = 'https://image.tmdb.org/t/p/w500';
const pagination = new Pagination(refs.pagination, options);
const page = pagination.getCurrentPage();

fetchGenresAPI().then(genres => {
  fetchFilmsAPI(page).then(data => {
    let markup = createCardMarkup(data, genres);
    if (!refs.movieList) {
      return;
    }
    refs.movieList.insertAdjacentHTML('beforeend', markup);
  });
});

function createCardMarkup(data, genres_names) {
  if (data.length === 0) {
    return;
  }
  return data
    .map(({ id, title, poster_path, release_date, genre_ids }) => {
      let release = release_date.slice(0, 4);
      let genres = [];
      for (let genre_id of genre_ids) {
        let genre = genres_names.find(({ id }) => id === genre_id);
        genres.push(genre.name);
      }
      if (genres.length >= 3) {
        genres = [genres[0], genres[1], 'Other'];
      }
      function generatePosterImg(poster_path) {
        if (poster_path === null) {
          return noPosterImg;
        }
        return `${basicImgURL}${poster_path}`;
      }
      let genres_str = genres.join(', ');
      return `<li class="card">
  <a href="" class="card-link link" data-id="${id}">
   <div class="card-box">
    <img class="card-img" src="${generatePosterImg(
      poster_path
    )}" alt="${title}">
    </div>
    <h3 class="card-name">${title}</h3>
    <div class="card-item">
      <p class="card-genres">${genres_str}</p>
      <p class="card-year"><span class="card-line">|</span>${release}</p>
    </div>
  </a>
</li>`;
    })
    .join('');
}
