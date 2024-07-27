import 'regenerator-runtime';
import '../styles/style.css';
import swRegister from './utils/sw-register';
import 'lazysizes';
import '../styles/media-responsive.css';
import App from './views/app';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const skipLink = document.querySelector('.skip');
const mainContent = document.querySelector('#main-content');

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});
const app = new App({
  nav: document.querySelector('#nav'),
  button: document.querySelector('#drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
