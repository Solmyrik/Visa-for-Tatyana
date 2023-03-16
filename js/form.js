const data = new Date();
let currentDay = data.getDay();

const button = document.querySelector('.quiz__button');
const nameInput = document.querySelector('.input-name');
const phoneInput = document.querySelector('.input-phone');
const choiceForm = document.querySelector('.choice');
const selectForm = document.querySelector('.quiz__select');
const countForm = document.querySelector('.quiz__count');
const datePicker = document.querySelector('#datePicker');

button.addEventListener('click', async () => {
  let currentName = nameInput.value;
  let currentPhone = phoneInput.value;
  let typeVisa = selectForm.value;
  let choiceCurrentForm = 'нет';
  let currentDate = datePicker.value;
  let currentCount = countForm.textContent;
  let currentNumber = getRandomInt(100000);
  if (currentPhone.length > 17 && currentName.length > 1) {
    for (const child of choiceForm.children) {
      if (child.className.includes('active')) {
        choiceCurrentForm = child.textContent;
      }
    }
    let formData = new FormData();
    formData.append('key1', currentName);
    formData.append('key2', currentPhone);
    formData.append('key3', typeVisa);
    formData.append('key4', choiceCurrentForm);
    formData.append('key5', currentDate);
    formData.append('key6', currentCount);
    console.log(currentName, currentPhone, typeVisa, choiceCurrentForm, currentDate, currentCount);
    let responce = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });
    thanksPopup();
    nameInput.value = '';
    phoneInput.value = '';
  } else {
    alert('Введите корректно имя и номер телефона');
  }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const thanksBlock = document.querySelector('.thanks');

function thanksPopup() {
  thanksBlock.style.display = 'block';
  setTimeout(() => {
    thanksBlock.style.display = 'none';
  }, 3000);
}
