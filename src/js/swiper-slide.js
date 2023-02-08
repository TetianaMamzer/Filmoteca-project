import { trendingFilms } from './film-api';

const refs = {
  gallery: document.querySelector('.swiper-slider'),
  shadow: document.querySelector('.swiper-shadow'),
};

const noPosterImg =
  'https://freedesignfile.com/upload/2018/11/Characters-in-film-design-elements-background-vector-graphic-715.jpg';
const basicImgURL = 'https://image.tmdb.org/t/p/w500';

trendingFilms().then(data => {
  refs.gallery.insertAdjacentHTML('beforeend', createPopularList(data));
  refs.shadow.insertAdjacentHTML('beforeend', createPopularList(data));

  const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
      0: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      680: {
        slidesPerView: 3.5,
        spaceBetween: 60,
      },
    },
  });

  const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5,
  });

  sliderMain.controller.control = sliderBg;

  // document.querySelectorAll('.slider__item').forEach(item => {
  //   item.addEventListener('click', e => {
  //     item.classList.toggle('opened')
  //   })
  // })

  let desc = document.querySelector('.description');
  sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0
      ? desc.classList.add('hidden')
      : desc.classList.remove('hidden');
  });
});

function createPopularList(data) {
  if (data.length === 0) {
    return;
  }
  return data
    .map(({ id, poster_path }) => {
      function generatePosterImg(poster_path) {
        if (poster_path === null) {
          return noPosterImg;
        }
        return `${basicImgURL}${poster_path}`;
      }
      return `<div class="swiper-slide slider__item card-link">
    <div class="slider__img" data-swiper-parallax="20%" style="background-image: url(${generatePosterImg(
      poster_path
    )});" data-id=${id}></div>
    </div>`;
    })
    .join('');
}
