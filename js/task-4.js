const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.querySelector("input[name='email']").value.trim();
  const password = form.querySelector("input[name='password']").value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  console.log(`Email: ${email}, Password: ${password}`);

  form.reset();
});
