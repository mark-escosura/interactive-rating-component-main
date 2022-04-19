window.addEventListener('load', () => {
  let value = 0;
  const buttons = document.querySelectorAll('.buttons');
  const formCard = document.getElementById('form-card');

  const displayErrorStyle = (style) => {
    document.getElementById('error').style.display = style;
  };

  const displayThankYouCard = (style) => {
    document.getElementById('thank-you-card').style.display = style;
  };

  const removeFormCard = (style) => {
    document.getElementById('form-card').style.display = style;
  };

  displayErrorStyle('none');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => {
        item.classList.remove('clicked');
      });
      button.classList.add('clicked');
      displayErrorStyle('none');
      value = button.value;
    });
  });

  formCard.addEventListener('submit', (e) => {
    e.preventDefault();
    if (value === 0) {
      displayErrorStyle('grid');
      setTimeout(() => {
        displayErrorStyle('none');
      }, 3500);
    } else {
      removeFormCard('none');
      displayThankYouCard('grid');
      document.querySelector('span').innerText = value;
    }
  });
});
