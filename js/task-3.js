const refs = {
  userNameField: document.querySelector('#name-input'),
  title: document.querySelector('h1'),
  subTitle: document.querySelector('#name-output'),
  paragraph: document.querySelector('p'),
};
refs.title.classList.add('title');
refs.userNameField.addEventListener('input', event => {
  const trimInput = refs.userNameField.value.trim();
  refs.subTitle.textContent = trimInput === '' ? 'Anonymous' : trimInput;
});

const newDiv = document.createElement('div');
newDiv.classList.add('task-3-container');

refs.userNameField.parentNode.insertBefore(newDiv, refs.userNameField);
newDiv.appendChild(refs.userNameField);
newDiv.appendChild(refs.title);
