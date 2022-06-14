import 'bootstrap/dist/css/bootstrap.min.css';
import { displayData, URL, scoreUl } from './functions.js';
import './index.css';

const nameValue = document.querySelector('#name');
const scoreValue = document.querySelector('#score');
const ourRefreshBtn = document.querySelector('#refresh_btn');
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      user: nameValue.value,
      score: scoreValue.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => {
    response.json();
    nameValue.value = '';
    scoreValue.value = '';
  });
});

ourRefreshBtn.addEventListener('click', () => {
  if (scoreUl.innerHTML !== '') {
    scoreUl.innerHTML = '';
    displayData();
  } else {
    displayData();
  }
});
displayData();
