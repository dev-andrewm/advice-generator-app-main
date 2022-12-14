window.onload = () => {
  const advTitle = document.querySelector('.advice__title');
  const advText = document.querySelector('.advice__text');
  const refreshButton = document.querySelector('.refresh-box');
  const url = 'https://api.adviceslip.com/advice';

  const loadAdvice = async () => {
    try {
      const adv = await fetch(url);
      const advJson = adv.json();

      return advJson;
    } catch (error) {
      console.log('Error', error);
    }
  };

  refreshButton.addEventListener('click', () => {
    loadAdvice().then(({ slip }) => {
      ({ id, advice } = slip);
      advTitle.innerText = `Advice #${id}`;
      advText.innerText = advice;
    });
  });
};
