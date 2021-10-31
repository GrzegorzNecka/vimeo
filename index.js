// Import stylesheets
import './style.css';

const movieConrainer = document.querySelector('.movie');
const fireBtn = document.querySelector('.fire');
const vimeoUrl = 'https://player.vimeo.com/video/634598330?h=cfe7c5fc07';

const createBtn = () => {
  const btn = document.createElement('button');
  btn.classList.add('close');
  btn.innerText = 'close';
  movieConrainer.appendChild(btn);
};

const createVimeo = () => {
  const ifrm = document.createElement('iframe');
  ifrm.setAttribute('src', vimeoUrl);
  ifrm.setAttribute('class', 'vimeo-introduction vimeo-introduction--active');

  movieConrainer.appendChild(ifrm);
  createBtn();
};

const movieIsOpen = () => {
  document.querySelector('.vimeo-introduction--active');
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

  vimeo.stop();

  if (vimeo) {
    vimeo.classList.remove('vimeo-introduction--active');
  }
}

fireBtn.addEventListener('click', visibleFrame);
movieConrainer.addEventListener('click', hiddenFrame);
