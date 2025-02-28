const refs = {
  userNameField: document.querySelector("#name-input"),
  title: document.querySelector("#name-output"),
};
// console.dir(refs);
refs.userNameField.addEventListener("input", (event) => {
  const trimInput = refs.userNameField.value.trim();
  refs.title.textContent = trimInput === "" ? "Anonymous" : trimInput;
});
