function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.querySelector('.change-color').addEventListener('click', () => {
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  document.querySelector('.color').textContent = randomColor;
});
const refs = {
  paragraph: document.querySelector('div p'),
};
refs.paragraph.classList.add('task-5-paragraph');
