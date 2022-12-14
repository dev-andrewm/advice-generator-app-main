const advTitle = document.querySelector('.advice__title');
const advText = document.querySelector('.advice__text');
const refreshButton = document.querySelector('.refresh-box');
const url = 'https://api.adviceslip.com/advice/12';

async function catchAdvice() {
  const jsonDetails = fetch(url)
    .then((response) => response.json)
    .then((a) => console.log(a));

  /* const adviceNumber = (await jsonDetails).slip.id;
  const adviceText = (await jsonDetails).slip.advice; */

  console.log(jsonDetails);
}

refreshButton.addEventListener('click', () => {
  catchAdvice();
});
