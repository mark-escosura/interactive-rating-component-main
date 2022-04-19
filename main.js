window.addEventListener('load', () => {
  let value = 0;
  const buttons = document.querySelectorAll('.buttons');
  const formCard = document.getElementById('form-card');
  const thankYouCard = document.getElementById('thank-you-card');
  const rate = document.querySelector('span');
  const error = document.getElementById('error');
  error.style.display = 'none';
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => {
        item.classList.remove('clicked');
      });
      button.classList.add('clicked');
      error.style.display = 'none';
      value = button.value;
    });
  });

  formCard.addEventListener('submit', (e) => {
    e.preventDefault();
    if (value === 0) {
      error.style.display = 'grid';
      setTimeout(() => {
        error.style.display = 'none';
      }, 3500);
    } else {
      formCard.classList.add('none');
      thankYouCard.classList.remove('none');
      rate.innerText = value;
    }
  });
});
