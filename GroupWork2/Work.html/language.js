function toggleNavLanguage() {
  const navEnglish = document.querySelector('.language');
  const navGeorgian = document.querySelector('.language-other');
  const isGeorgian = document.getElementById('lang').checked;

  if (isGeorgian) {
    navEnglish.style.display = 'none';
    navGeorgian.style.display = 'inline-flex';
    localStorage.setItem('NavLanguage', 'georgian');
  } else {
    navEnglish.style.display = 'inline-flex';
    navGeorgian.style.display = 'none';
    localStorage.setItem('NavLanguage', 'english');
  }
}

function toggleMembersLanguage() {
  const membersEnglish = document.querySelector('.members');
  const membersGeorgian = document.querySelector('.members2');
  const isGeorgian = document.getElementById('lang').checked;

  if (isGeorgian) {
    membersEnglish.style.display = 'none';
    membersGeorgian.style.display = 'block';
    localStorage.setItem('MembersLanguage', 'georgian');
  } else {
    membersEnglish.style.display = 'block';
    membersGeorgian.style.display = 'none';
    localStorage.setItem('MembersLanguage', 'english');
  }
}

function toggleLanguage() {
  const eng = document.querySelector('.eng');
  const geo = document.querySelector('.geo');
  const GEO = document.getElementById('lang').checked;

  if (GEO) {
    eng.style.display = 'none';
    geo.style.display = 'inline-flex';
    localStorage.setItem('NavLanguage', 'georgian');
  } else {
    eng.style.display = 'inline-flex';
    geo.style.display = 'none';
    localStorage.setItem('NavLanguage', 'english');
  }
}


function changeLanguage() {
  toggleNavLanguage();
  toggleMembersLanguage()
  toggleLanguage()
}

window.onload = function () {
  const NavLang = localStorage.getItem('NavLanguage');
  if (NavLang === 'georgian') {
    document.getElementById('lang').checked = true;
  } else {
    document.getElementById('lang').checked = false;
  }
  changeLanguage();
}
