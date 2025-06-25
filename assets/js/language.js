const language = localStorage.getItem("language") || navigator.language.split("-")[0] || "en";
const activeEl = window.location.pathname.split('/').pop().split('.')[0];
const activeElExt = window.location.pathname.split('/').pop().split('.')[1];
const currentLang = document.querySelector('html').getAttribute('lang');

if (activeEl && activeElExt && language !== currentLang) {
  window.location.href = `/${language}/${activeEl}.${activeElExt}`;
} else if (language !== currentLang) {
  window.location.href = `/${language}/`;
}
