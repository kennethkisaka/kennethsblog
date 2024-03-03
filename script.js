// Add any JavaScript functionality here, for example:

// Change the heading color on hover
const heading = document.querySelector('h1');
heading.addEventListener('mouseover', () => {
  heading.style.color = 'blue';
});

heading.addEventListener('mouseout', () => {
  heading.style.color = 'black';
});
