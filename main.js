window.addEventListener('load', () => {
  let value = 0;
  const buttons = document.querySelectorAll('.buttons');
  const formCard = document.getElementById('form-card');
  const thankYouCard = document.getElementById('thank-you-card');
  const rate = document.querySelector('span');
  const error = document.getElementById('error');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => {
        item.classList.remove('clicked');
      });
      button.classList.add('clicked');

      value = button.value;
    });
    error.classList.remove('none');
  });

  formCard.addEventListener('submit', (e) => {
    e.preventDefault();
    if (value === 0) {
      error.classList.remove('none');
    } else {
      error.classList.add('none');
      formCard.classList.add('none');
      thankYouCard.classList.remove('none');
      rate.innerText = value;
    }
  });
});
