# Frontend Mentor - QR code component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

An interactive card rating feature that allows users to give feedback. It includes user interactions and DOM updating.

### Screenshot

Desktop View:
![Desktop View](/designs/interactive-card-rating-component-desktop-view.png)
![Desktop View](/designs/thank-you-card-desktop-view.png)
Mobile View:
![Mobile View](/designs/interactive-card-rating-component-mobile-view.png)
![Mobile View](/designs/thank-you-card-mobile-view.png)

### Links

- [Solution](https://github.com/mark-escosura/interactive-rating-component-main)
- [Deployed Site](https://interactive-rating-component-peach.vercel.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox properties
- Pure Javascript

### What I learned

```js
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
```

**Code Snippet Above:**

It's iterating through each `buttons`

```js
buttons = document.querySelectorAll('.buttons');
```

and adding, the className `.clicked`

```css
.clicked {
  color: var(--color-white);
  background-color: var(--color-primary);
}
```

**See [Style Guide](style-guide.md)**

every time a click event is triggered within the targeted elements `buttons`. Inside the EventListener function, every time a user clicks on a button within the targeted elements `buttons`, it adds the `.clicked` className to that specific button and when clicking another button, another forEach function is called, in which, it iterates through the items that currently has the className `.clicked` and then removes it.

**One thing I learned from this project is that refactoring is helpful on keeping the code DRY (Do Not Repeat Yourself)**

## Author

- Website - [Mark Escosura](https://mark-escosura-portfolio.vercel.app/)
- Frontend Mentor - [@mark-escosura](https://www.frontendmentor.io/profile/mark-escosura)
- Twitter - [@ayeitsmaark](https://www.twitter.com/ayeitsmaark)
