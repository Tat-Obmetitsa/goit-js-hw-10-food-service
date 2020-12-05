const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const refs = {
  bodyTheme: document.querySelector('body'),
  iconTheme: document.querySelector('.theme-switch__toggle'),
};

const STORAGE_KEY = 'theme';

refs.iconTheme.addEventListener('change', changeTheme);
defaultTheme();

function defaultTheme() {
  const theme = localStorage.getItem(STORAGE_KEY);
  if (theme === 'true') {
    refs.bodyTheme.classList.add(Theme.DARK);
    refs.iconTheme.checked = true;
  } else {
    refs.bodyTheme.classList.add(Theme.LIGHT);
  }
}

function changeTheme(evt) {
  refs.bodyTheme.classList.toggle(Theme.DARK);
  refs.bodyTheme.classList.toggle(Theme.LIGHT);
  localStorage.setItem(STORAGE_KEY, evt.target.checked);
}

// function changeTheme() {
//   if (refs.iconTheme.checked) {
//     setDarkTheme();
//     localStorage.setItem(STORAGE_KEY, Theme.DARK);
//   } else {
//     setLightTheme();
//     localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
//   }
// }
// function setDarkTheme() {
//   refs.bodyTheme.classList.add(Theme.DARK);
//   refs.bodyTheme.classList.remove(Theme.LIGHT);
// }
// function setLightTheme() {
//   refs.bodyTheme.classList.add(Theme.LIGHT);
//   refs.bodyTheme.classList.remove(Theme.DARK);
// }