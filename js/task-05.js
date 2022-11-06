const formEl = document.querySelector("#name-input");
const greetingEl = document.querySelector("#name-output");

formEl.addEventListener("input", onChangeTextInput);

function onChangeTextInput(event) {
  const inputValue = event.currentTarget.value.trim();
  greetingEl.textContent = inputValue ? inputValue : "Anonymous";
}
