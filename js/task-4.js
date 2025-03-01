const refs = {
  form: document.querySelector('.login-form'),
  label: document.querySelectorAll('label'),
  input: document.querySelectorAll('input'),
  btn: document.querySelector('button'),
};
refs.form.addEventListener('submit', event => {
  event.preventDefault();

  const email = refs.form.querySelector("input[name='email']").value.trim();
  const password = refs.form.querySelector("input[name='password']").value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  console.log(`Email: ${email}, Password: ${password}`);

  form.reset();
});
refs.btn.classList.add('task-4-btn');
