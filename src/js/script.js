const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const refs = {
  bodyTheme: document.querySelector('body'),
  iconTheme: document.querySelector('.theme-switch__toggle'),
};

refs.bodyTheme.classList.add(Theme.LIGHT);

refs.iconTheme.addEventListener('change', changeTheme);

function changeTheme(evt) {
  refs.bodyTheme.classList.toggle(Theme.DARK);
  localStorage.setItem(evt.target.checked);
}
