const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

const listMenu = document.querySelector('.menu__list');
listMenu.addEventListener('click', (e) => {
  if (e.target.className === 'menu__link') {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  }
});

function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

//count
const count = document.querySelector('.quiz__count');
const counter = document.querySelector('.quiz__counter');

counter.addEventListener('click', (e) => {
  if (e.target.className === 'quiz__decrement') {
    if (Number(count.textContent) > 1) count.textContent = Number(count.textContent) - 1;
  }
  if (e.target.className === 'quiz__increment') {
    count.textContent = Number(count.textContent) + 1;
  }
});

// choice
const choice = document.querySelectorAll('.quiz__choices');

choice.forEach((ch) => {
  onChoice(ch);
});

function onChoice(elem) {
  elem.addEventListener('click', (e) => {
    if (e.target.className === 'quiz__choice') {
      for (const child of elem.children) {
        child.classList.remove('active');
      }
      e.target.classList.add('active');
    }
  });
}

//date
Date.prototype.toDateInputValue = function () {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};

document.getElementById('datePicker').value = new Date().toDateInputValue();
