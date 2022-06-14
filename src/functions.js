const URL =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cYau0WWSb1dWdvilmXoI/scores';

export const scoreUl = document.querySelector('.score-list');

const displayData = async () => {
  const fetchData = await fetch(URL).then((response) => response.json());
  fetchData.result.sort((a, b) => b.score - a.score);
  fetchData.result.forEach((item) => {
    const scoreContainer = document.createElement('li');
    scoreContainer.className = 'list-item';
    scoreContainer.innerHTML = `<li>${item.user} : ${item.score}</li>`;
    scoreUl.appendChild(scoreContainer);
    scoreUl.style.display = 'block';
  });
};

export { displayData, URL };
