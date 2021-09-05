import App from './views/app';
import swRegister from './utils/sw-register';
import 'regenerator-runtime';
import '../styles/main.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('.navbar .navbar--toggle'),
  drawer: document.querySelector('.navbar .nav--list'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
