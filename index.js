// Import stylesheets
// import vimeo from 'vimeo';
import './style.css';

const movieConrainer = document.querySelector('.movie');
const fireBtn = document.querySelector('.fire');
const vimeoUrl = 'https://player.vimeo.com/video/634598330?h=cfe7c5fc07';
const vimeoOptions = `webkitallowfullscreen mozallowfullscreen allowfullscreen`;
let player = null;
const createBtn = () => {
  const btn = document.createElement('button');
  btn.classList.add('close');
  btn.innerText = 'close';
  movieConrainer.appendChild(btn);
};

const createVimeo = () => {
  const ifrm = document.createElement('iframe');
  ifrm.setAttribute('src', vimeoUrl);
  ifrm.setAttribute('width', '100%');
  ifrm.setAttribute('height', '500px');
  ifrm.setAttribute('frameborder', '0');
  ifrm.setAttribute('class', 'vimeo-introduction vimeo-introduction--active');
  movieConrainer.appendChild(ifrm);
  createBtn();
  player = new Vimeo.Player(ifrm);
};

const movieIsOpen = () => {
  return document.querySelector('.vimeo-introduction--active');
};

function visibleFrame() {
  if (movieIsOpen()) {
    console.log('już jest odpalony');
    return;
  }

  const vimeo = document.querySelector('.vimeo-introduction');

  if (vimeo) {
    vimeo.classList.add('vimeo-introduction--active');
    console.log('istnieje');
  } else {
    createVimeo();
    console.log('nie-istnieje');
  }
}

function hiddenFrame(e) {
  if (e.target.className != 'close') {
    return;
  }

  const vimeo = movieIsOpen();

  if (vimeo) {
    vimeo.classList.remove('vimeo-introduction--active');
    player.pause();
  }
}

fireBtn.addEventListener('click', visibleFrame);
movieConrainer.addEventListener('click', hiddenFrame);
