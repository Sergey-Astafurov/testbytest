const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const openPopupButtons = document.querySelectorAll('.open-popup');
const closePopupButton = document.querySelector('.close-popup');
const btnSub = document.querySelector('.btn__submit')
const inp = document.querySelectorAll('.input')
const info = document.querySelector('.info')
let data = []
openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
  })
});

closePopupButton.addEventListener('click', () => {
  popupBg.classList.remove('active');
  popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  }
});
btnSub.addEventListener('click', (e) => {
  e.preventDefault()
  data = []
  inp.forEach((el, k) => {
    data.push({ value: el.value })
    el.value = ''
  })
  data = JSON.stringify(data)
  info.textContent = data

  popupBg.classList.remove('active');
  popup.classList.remove('active');

})


