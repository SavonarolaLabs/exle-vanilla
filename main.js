// main.js
import navbarHTML from './html/navbar.html';
import landingHTML from './html/landing.html';
import footerHTML from './html/footer.html';

// Replace innerHTML assignments with insertAdjacentHTML
document.getElementById('navbar').insertAdjacentHTML('afterbegin', navbarHTML);
document.getElementById('landing').insertAdjacentHTML('afterbegin', landingHTML);
document.getElementById('footer').insertAdjacentHTML('afterbegin', footerHTML);

// Vite HMR - Hot Module Replacement
if (import.meta.hot) {
  import.meta.hot.accept(['./html/navbar.html', './html/landing.html', './html/footer.html'], ([newNavbarModule, newLandingModule, newFooterModule]) => {
    if (newNavbarModule) {
      document.getElementById('navbar').innerHTML = '';
      document.getElementById('navbar').insertAdjacentHTML('afterbegin', newNavbarModule.default);
    }
    if (newLandingModule) {
      document.getElementById('landing').innerHTML = '';
      document.getElementById('landing').insertAdjacentHTML('afterbegin', newLandingModule.default);
    }
    if (newFooterModule) {
      document.getElementById('footer').innerHTML = '';
      document.getElementById('footer').insertAdjacentHTML('afterbegin', newFooterModule.default);
    }
  });
}

// Theme toggle functionality
document.addEventListener('click', (event) => {
  if (event.target.id === 'theme-toggle') {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    event.target.textContent = newTheme === 'dark' ? '🌙' : '☀️';
  }
});
