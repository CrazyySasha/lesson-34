import './style.css'

document
  .querySelector('#darkModeToggler')
  .addEventListener('click', () => {
    document.querySelector('html').classList.toggle('dark');

    document
      .querySelectorAll('#darkModeToggler > svg')
      .forEach((e) => e.classList.toggle('hidden'))

  })